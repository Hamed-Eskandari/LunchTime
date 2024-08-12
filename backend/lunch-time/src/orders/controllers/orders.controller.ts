import { Controller, Get, Post, Body, Delete, Put, Param } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../entities/order.entity';
import { OrdersService } from '../services/orders.service';
import { UpdateOrderDto } from '../dto/update-order.dto';


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
  // Endpoint for updating a single order by ID
  @Put(':id')
  async updateOrder(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.ordersService.updateOrder(id, updateOrderDto);
  }

  // Endpoint for updating all orders
  @Put()
  async updateAllOrders(@Body() orders: Partial<CreateOrderDto>[]): Promise<Order[]> {
    return this.ordersService.updateAllOrders(orders);
  }
  }


