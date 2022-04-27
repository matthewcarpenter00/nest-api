import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto, EditOrderDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  getOrders() {
    return this.prisma.order.findMany({
      include: {
        customer: {
          select: {
            company: true,
          },
        },
      },
    });
  }

  async getOrderById(orderId: number) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId },
      include: {
        orderItems: true,
        customer: true,
      },
    });
    return order;
  }

  async createOrder(dto: CreateOrderDto) {
    const totalAmount = new Prisma.Decimal(dto.totalAmount);
    const order = await this.prisma.order.create({
      data: { totalAmount, ...dto },
    });
    return order;
  }

  async editOrder(orderId: number, dto: EditOrderDto) {
    const order = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        ...dto,
      },
    });
    return order;
  }
}
