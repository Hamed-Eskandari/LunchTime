import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/order.entity/order.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'lunch-time.sqlite',
      entities: [Order],
      synchronize: true,
    }),
    OrdersModule,
  ],
})
export class AppModule {}
