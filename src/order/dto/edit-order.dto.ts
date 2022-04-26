import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditOrderDto {
  @IsString()
  @IsOptional()
  docNumber: string;

  @IsOptional()
  @IsInt()
  totalAmount: number;

  @IsInt()
  @IsOptional()
  invoiceNumber: number;

  @IsString()
  @IsOptional()
  poName: string;

  @IsString()
  @IsOptional()
  shippingRoute: string;

  @IsString()
  @IsOptional()
  orderStatus: string;

  @IsInt()
  @IsOptional()
  staffId: number;

  @IsNumber()
  @IsOptional()
  customerId: number;
}
