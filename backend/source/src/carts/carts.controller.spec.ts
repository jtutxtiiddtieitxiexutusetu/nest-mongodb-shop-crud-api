import { Test, TestingModule } from '@nestjs/testing';
import { composeAppModuleMetaData } from '../app.module';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { resetState } from '../../test/common';

describe('CartsController', () => {
  let module: TestingModule
  let cartsController: CartsController;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    cartsController = module.get<CartsController>(CartsController);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('should be defined', () => {
    expect(cartsController).toBeDefined();
  });
});
