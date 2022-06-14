import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto, EditCustomerDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  getCustomers() {
    return this.prisma.customer.findMany();
  }

  async getCustomerById(customerEmail: string) {
    const bookmark = await this.prisma.customer.findFirst({
      where: { email: customerEmail },
      include: {
        orders: true,
      },
    });
    return bookmark;
  }

  async createCustomer(dto: CreateCustomerDto) {
    const customer = await this.prisma.customer.create({
      data: { ...dto },
    });
    return customer;
  }

  async editCustomer(customerEmail: string, dto: EditCustomerDto) {
    const user = await this.prisma.customer.update({
      where: { email: customerEmail },
      data: {
        ...dto,
      },
    });
    return user;
  }
  
  async deleteCustomer(customerEmail: string) {
    await this.prisma.customer.delete({ where: { email: customerEmail} });
  }
}
