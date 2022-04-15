import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  address?: string;

  @IsNotEmpty()
  @IsString()
  address2: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  tierLevel: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsNumber()
  @IsNotEmpty()
  zipCode: number;
}
