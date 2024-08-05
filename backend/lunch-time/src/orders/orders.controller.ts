import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Order } from './order.entity/order.entity';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Post()
  async create(@Body() orderData: Partial<Order>): Promise<Order> {
    return this.ordersService.create(orderData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() orderData: Partial<Order>): Promise<Order> {
    return this.ordersService.update(id, orderData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.ordersService.delete(id);
  }
}
