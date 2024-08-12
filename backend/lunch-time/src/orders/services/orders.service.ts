import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

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
  async updateOrder(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    Object.assign(order, updateOrderDto); // Assign updated fields to the order
    return this.orderRepository.save(order);
  }

  async updateAllOrders(orders: Partial<CreateOrderDto>[]): Promise<Order[]> {
    const updatedOrders: Order[] = [];
    for (const updateOrderDto of orders) {
      const order = await this.orderRepository.findOneBy({
        id: updateOrderDto.id,
      });
      if (order) {
        Object.assign(order, updateOrderDto);
        updatedOrders.push(await this.orderRepository.save(order));
      }
    }
    return updatedOrders;
  }
}
