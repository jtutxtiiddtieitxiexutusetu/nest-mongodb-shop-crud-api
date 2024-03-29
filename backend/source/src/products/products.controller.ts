import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Products } from "./products.schema";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { CartsService } from "../carts/carts.service";

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cartsService: CartsService
  ) { }

  @Post()
  @ApiResponse({
    type: Products
  })
  async createProducts(@Body() products: Products) {
    return await this.productsService.create(products);
  }

  @Get()
  @ApiResponse({
    type: [Products]
  })
  async fetchAll() {
    return await this.productsService.readAll();
  }

  @Get('/:id')
  @ApiResponse({
    type: Products
  })
  async findById(@Param('id') id: string) {
    return await this.productsService.readById(id);
  }

  @Put('/:id')
  @ApiResponse({
    type: Products
  })
  async update(@Param('id') id: string, @Body() products: Products) {
    return await this.productsService.update(id, products);
  }

  @Delete('/:id')
  @ApiResponse({
    type: Products
  })
  async delete(@Param('id') id: string) {
    
    return await this.productsService.delete(id);
  }
}