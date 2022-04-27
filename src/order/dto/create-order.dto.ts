import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  docNumber: string;

  @IsNotEmpty()
  totalAmount: number;

  @IsInt()
  @IsOptional()
  invoiceNumber: number;

  @IsString()
  @IsNotEmpty()
  poName: string;

  @IsString()
  @IsNotEmpty()
  shippingRoute: string;

  @IsString()
  @IsNotEmpty()
  orderStatus: string;

  @IsInt()
  @IsNotEmpty()
  staffId: number;

  @IsNumber()
  @IsNotEmpty()
  customerId: number;
}
