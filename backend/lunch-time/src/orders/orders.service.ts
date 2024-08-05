import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity/order.entity';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.name = createOrderDto.name;
    order.order = createOrderDto.order;
    order.restaurant = createOrderDto.restaurant;
    order.paid = createOrderDto.paid;

    order.price = createOrderDto.price;
    order.accompany = createOrderDto.accompany;
    order.day = createOrderDto.day;
    order.time = createOrderDto.time;

    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }
  async deleteAll(): Promise<void> {
    await this.orderRepository.clear();
  }
}
