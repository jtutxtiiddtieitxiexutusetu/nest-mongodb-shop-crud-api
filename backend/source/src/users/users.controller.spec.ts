import { Test, TestingModule } from '@nestjs/testing';
import { resetState } from '../../test/common';
import { composeAppModuleMetaData } from '../app.module';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let module: TestingModule
  let usersController: UsersController;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    usersController = module.get<UsersController>(UsersController);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });
});
