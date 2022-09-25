import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products.name) private productsModel: Model<ProductsDocument>,
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Products> {
    const prod = await this.productsModel.create(createProductDto);
    return prod;
  }

  async findAll(): Promise<Products[]> {
    const productos = await this.productsModel.find({});
    return productos;
  }

  async findOne(id: string) {
    const producto = await this.productsModel.find({ _id: id });
    return producto;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updatedItem = await this.productsModel.findOneAndUpdate(
      { _id: id },
      updateProductDto,
      { new: true },
    );
    if (updatedItem) return updatedItem;
  }

  async remove(id: string) {
    const producto = await this.productsModel.deleteOne({ _id: id });
    if (producto?.deletedCount) {
      return `Se eliminó el producto`;
    }
  }
}
