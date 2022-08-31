import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { CartsService } from "./carts.service";
import { Carts } from "./carts.schema";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('carts')
@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) { }

  @Post()
  @ApiResponse({
    type: Carts
  })
  async createCarts(@Body() carts: Carts) {
    return await this.cartsService.create(carts);
  }

  @Get()
  @ApiResponse({
    type: [Carts]
  })
  async fetchAll() {
    return await this.cartsService.readAll();
  }

  @Get('/:id')
  @ApiResponse({
    type: Carts
  })
  async findById(@Param('id') id: string) {
    return await this.cartsService.readById(id);
  }

  @Put('/:id')
  @ApiResponse({
    type: Carts
  })
  async update(@Param('id') id: string, @Body() carts: Carts) {
    return await this.cartsService.update(id, carts);
  }

  @Delete('/:id')
  @ApiResponse({
    type: Carts
  })
  async delete(@Param('id') id: string) {
    return await this.cartsService.delete(id);
  }
}