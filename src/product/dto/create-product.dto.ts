import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @IsNotEmpty()
  price: number;
}
