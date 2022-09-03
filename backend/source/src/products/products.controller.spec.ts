import { Test, TestingModule } from '@nestjs/testing';
import { composeAppModuleMetaData } from '../app.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { resetState } from '../../test/common';

describe('ProductsController', () => {
  let module: TestingModule
  let productsController: ProductsController;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    productsController = module.get<ProductsController>(ProductsController);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('should be defined', () => {
    expect(productsController).toBeDefined();
  });
});
