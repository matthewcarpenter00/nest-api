import { IsInt, IsOptional, IsString } from 'class-validator';

export class EditOrderItemsDto {
  @IsInt()
  @IsOptional()
  orderId: number;

  @IsInt()
  @IsOptional()
  productId: number;

  @IsInt()
  @IsOptional()
  quantity: number;

  @IsString()
  @IsOptional()
  notes: string;
}
