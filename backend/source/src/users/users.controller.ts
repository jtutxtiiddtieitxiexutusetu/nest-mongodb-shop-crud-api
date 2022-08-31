import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "./users.schema";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiResponse({
    type: Users
  })
  async createUsers(@Body() users: Users) {
    return await this.usersService.create(users);
  }

  @Get()
  @ApiResponse({
    type: [Users]
  })
  async fetchAll() {
    return await this.usersService.readAll();
  }

  @Get('/:id')
  @ApiResponse({
    type: Users
  })
  async findById(@Param('id') id: string) {
    return await this.usersService.readById(id);
  }

  @Put('/:id')
  @ApiResponse({
    type: Users
  })
  async update(@Param('id') id: string, @Body() users: Users) {
    return await this.usersService.update(id, users);
  }

  @Delete('/:id')
  @ApiResponse({
    type: Users
  })
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}