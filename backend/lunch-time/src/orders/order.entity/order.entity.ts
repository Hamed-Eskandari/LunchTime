import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Required field

  @Column()
  order: string; // Required field

  @Column()
  restaurant: string; // Required field

  @Column('decimal', { nullable: true })
  price: number; // Optional field

  @Column({ type: 'boolean', default: false })
  paid: boolean; // Required field

  @Column({ nullable: true, default: false })
  accompany: boolean; // Optional field

  @Column()
  day: string; // Optional field

  @Column()
  time: string; // Optional field
}
