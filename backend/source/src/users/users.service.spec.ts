import { Test, TestingModule } from '@nestjs/testing';
import { resetState } from '../../test/common';
import { composeAppModuleMetaData } from '../app.module';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let module: TestingModule
  let usersService: UsersService;

  beforeEach(async () => {
    module = await Test.createTestingModule(composeAppModuleMetaData()).compile();
    usersService = module.get<UsersService>(UsersService);
  });

  afterEach(async () => {
    await resetState(module)
  })

  it('should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
