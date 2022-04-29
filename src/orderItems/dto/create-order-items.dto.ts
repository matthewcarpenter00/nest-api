import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOrderItemsDto {
  @IsInt()
  @IsNotEmpty()
  orderId: number;

  @IsInt()
  @IsNotEmpty()
  productId: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsOptional()
  notes: string;
}
