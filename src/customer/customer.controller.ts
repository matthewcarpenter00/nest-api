import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { CustomerService } from './customer.service';
import { CreateCustomerDto, EditCustomerDto } from './dto';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}
  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':email')
  getCustomerById(@Param('email') email: string) {
    return this.customerService.getCustomerById(email);
  }

  @Post()
  createCustomer(@Body() dto: CreateCustomerDto) {
    return this.customerService.createCustomer(dto);
  }

  @Patch(':email')
  editBookmarkById(
    @Body() dto: EditCustomerDto,
    @Param('email') email: string,
  ) {
    return this.customerService.editCustomer(email, dto);
  }

  @Delete(':email')
  deleteCustomer(@Param('email') email:string,){
    return this.customerService.deleteCustomer(email);
  }
}
