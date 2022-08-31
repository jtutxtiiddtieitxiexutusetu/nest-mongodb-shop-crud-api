import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users {

  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  email: string;
  
}

export const UsersSchema = SchemaFactory.createForClass(Users);