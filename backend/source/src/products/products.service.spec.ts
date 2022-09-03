import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { composeAppModuleMetaData } from '../app.module';
import { CartsModule } from '../carts/carts.module';
import { ProductsController } from './products.controller';
import { Products, ProductsSchema } from './products.schema';
import { ProductsService } from './products.service';
import { resetState } from '../../test/common';

describe('ProductService', () => {
  let module: TestingModule
  let productsService: ProductsService;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    productsService = module.get<ProductsService>(ProductsService);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('productsService should be defined', () => {
    expect(productsService).toBeDefined();
  });
});
