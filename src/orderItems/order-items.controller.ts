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

import { OrderItemsService } from './order-items.service';
import { CreateOrderItemsDto, EditOrderItemsDto } from './dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private orderItemsService: OrderItemsService) {}
  // @Get(':id')
  // getItemsByOrderId(@Param('id', ParseIntPipe) id: number) {
  //   return this.orderItemsService.getItemsByOrderId(id);
  // }

  @Post()
  createOrderItem(@Body() dto: CreateOrderItemsDto) {
    return this.orderItemsService.createOrderItem(dto);
  }

  @Delete(':id')
  deleteOrderItemById(@Param('id', ParseIntPipe) id: number) {
    return this.orderItemsService.deleteOrderItemById(id);
  }

  @Patch(':id')
  editOrderItemById(
    @Body() dto: EditOrderItemsDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.orderItemsService.editOrderItemById(id, dto);
  }
}
