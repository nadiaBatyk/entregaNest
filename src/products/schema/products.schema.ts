import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop()
  link: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
