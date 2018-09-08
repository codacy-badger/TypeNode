import { injectable } from 'inversify';
import { Connection, createConnection, getConnection } from 'typeorm';
import { INext, IReq, IReqFunc, IRes } from '../../interfaces/common/express';
import { UserSchema } from '../../model/schema/UserSchema';
import { logger } from '../../util/Logger';
import { DATABASE } from '../../constants/index';

export interface IDBConnection {
    connect(req: IReq, res: IRes, next: INext): IReqFunc;
}

@injectable()
export class DBConnection implements IDBConnection {
    public connect: IReqFunc = async (req: IReq, res: IRes, next: INext) => {
        try {
            // Check and move forward if connection is already established
            const connection: Connection = getConnection('default');
            if (connection.isConnected) {
                return next();
            }
        } catch (error) {
            logger.info('disconnected, creating new one');
        }
        try {
            // Create new connection
            await createConnection(DATABASE.CONNECTION_OPTIONS);
            logger.info('Database connection established');
            return next();
        } catch (error) {
            logger.error('error', error);
            return next(error);
        }
    }
}
