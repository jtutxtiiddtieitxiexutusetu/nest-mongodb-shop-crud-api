import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Carts, CartsSchema } from './carts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Carts.name,
        schema: CartsSchema
      }
    ])
  ],
  exports: [
    CartsService
  ],
  controllers: [CartsController],
  providers: [CartsService]
})
export class CartsModule {}
