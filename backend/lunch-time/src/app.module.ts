import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders/order.entity/order.entity';
import { OrdersModule } from './orders/orders.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'lunch-time.sqlite',
      entities: [Order,User],
      synchronize: true,
    }),
    OrdersModule,
    UsersModule,
  ],
})
export class AppModule {}
