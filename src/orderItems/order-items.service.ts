import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemsDto, EditOrderItemsDto } from './dto';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}
  getProducts() {
    return this.prisma.orderItem.findMany();
  }

  async getItemsByOrderId(orderId: number) {
    const orderItem = await this.prisma.orderItem.findFirst({
      where: { orderId },
    });
    return orderItem;
  }

  async createOrderItem(dto: CreateOrderItemsDto) {
    const orderItem = await this.prisma.orderItem.create({
      data: { ...dto },
    });
    return orderItem;
  }

  async deleteOrderItemById(orderItemId) {
    this.prisma.orderItem.delete({
      where: { id: orderItemId },
    });
  }

  async editItemByOrderId(orderId: number, dto: EditOrderItemsDto) {
    const product = await this.prisma.orderItem.update({
      where: { orderId },
      data: {
        ...dto,
      },
    });
    return product;
  }
}
