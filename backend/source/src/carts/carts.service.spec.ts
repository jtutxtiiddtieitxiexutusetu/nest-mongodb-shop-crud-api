import { Test, TestingModule } from '@nestjs/testing';
import { composeAppModuleMetaData } from '../app.module';
import { CartsService } from './carts.service';
import { resetState } from '../../test/common';

describe('CartsService', () => {
  let module: TestingModule
  let cartsService: CartsService;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    cartsService = module.get<CartsService>(CartsService);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('should be defined', () => {
    expect(cartsService).toBeDefined();
  });
});
