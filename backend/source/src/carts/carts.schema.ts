import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type CartsDocument = Carts & Document;

@Schema()
export class Carts {

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  items: string[];

}

export const CartsSchema = SchemaFactory.createForClass(Carts);