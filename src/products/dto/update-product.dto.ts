import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsAlpha,
  IsNumber,
  IsOptional,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsAlpha()
  @MaxLength(100)
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;
  @ApiProperty()
  @ApiPropertyOptional()
  @IsOptional()
  link: string;
}
