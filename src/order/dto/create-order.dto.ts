import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  docNumber: string;

  @IsNotEmpty()
  @IsInt()
  totalAmount: number;

  @IsInt()
  @IsNotEmpty()
  invoiceNumber: number;

  @IsInt()
  @IsNotEmpty()
  poName: string;

  @IsInt()
  @IsNotEmpty()
  shippingRoute: string;

  @IsInt()
  @IsNotEmpty()
  orderStatus: string;

  @IsInt()
  @IsNotEmpty()
  staffId: number;

  @IsInt()
  @IsNotEmpty()
  additionalNotes: string;
}
