import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';
import { Order } from './order.entity/order.entity';
import { OrdersService } from './orders.service';


@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Delete() 
  async deleteAll(): Promise<void> {
    return this.ordersService.deleteAll();
  }

}
