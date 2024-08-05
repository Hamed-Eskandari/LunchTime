import { Controller, Get, Post, Body } from '@nestjs/common';
import { Order } from './order.entity/order.entity';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() order: Order): Promise<Order> {
    return this.ordersService.create(order);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

}
