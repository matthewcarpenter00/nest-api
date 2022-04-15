import { IsOptional, IsString } from 'class-validator';

export class EditCustomerDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsOptional()
  tierLevel: string;

  @IsString()
  @IsOptional()
  company: string;
}
