import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  order: string;

  @Column()
  restaurant: string;

  @Column('decimal', { nullable: true })
  price: number;

  @Column()
  paid: string;

  @Column({ nullable: true })
  accompany: string;

  @Column()
  day: string;

  @Column()
  time: string;
}
