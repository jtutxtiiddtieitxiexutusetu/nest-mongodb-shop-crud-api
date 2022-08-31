import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type ProductsDocument = Products & Document;

@Schema()
export class Products {

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  price: string;
  
}

export const ProductsSchema = SchemaFactory.createForClass(Products);