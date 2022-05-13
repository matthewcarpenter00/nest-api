import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { OrderService } from './order.service';
import { CreateOrderDto, EditOrderDto } from './dto';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  @Get(':id')
  getOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getOrderById(id);
  }

  @Post()
  createOrder(@Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(dto);
  }

  @Delete(':id')
  deleteOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrderById(id);
  }

  @Patch(':id')
  editOrderById(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditOrderDto,
  ) {
    return this.orderService.editOrder(id, dto);
  }
}
