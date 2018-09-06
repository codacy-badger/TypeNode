import * as express from 'express';
import { inject, injectable } from 'inversify';
import { IRoutes } from '../interfaces/route/IRoutes';
import { AddressService } from '../service/AddressService';
import TYPES from '../types';

@injectable()
export class AddressRoute implements IRoutes {
    private addressService: AddressService;

    constructor(@inject(TYPES.AddressService) addressService: AddressService) {
        this.addressService = addressService;
    }

    public register(app: express.Application): void {
        /*app.route('/')
          .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
              const addresses = await this.addressService.getAddresses().catch((err) => next(err));
              res.json(addresses);
          })
          .post(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
              const address = new Address(
                req.body.address1,
                req.body.address2,
                req.body.city,
                req.body.state,
                req.body.zip,
                req.body.country
              );
              const createdAddress = await this.addressService.createAddress(address).catch((err) => next(err));
              res.json(createdAddress);
          });

        app.route('/:id')
          .get(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
              const addresses = await this.addressService.getAddress(req.params.id).catch((err) => next(err));
              res.json(addresses);
          })
          .put(async (req: express.Request, res: express.Response, next: express.NextFunction) => {
              const address = new Address(
                req.body.address1,
                req.body.address2,
                req.body.city,
                req.body.state,
                req.body.zip,
                req.body.country,
                req.body.id
              );

              const updatedAddress = await this.addressService.updateAddress(address).catch((err) => next(err));
              res.json(updatedAddress);
          });*/
    }
}
