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
    const products = [];
    const order = await this.prisma.order.findFirst({
      where: { id: orderId },
      include: {
        orderItems: true,
        customer: true,
      },
    });
    const { orderItems } = order;
    for (let i = 0; i < orderItems.length; i++) {
      const product = await this.prisma.product.findFirst({
        where: { id: orderItems[i].id },
      });
      products.push(product);
    }
    return { order, products };
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
