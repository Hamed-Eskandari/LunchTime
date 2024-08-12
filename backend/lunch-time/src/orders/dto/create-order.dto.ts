import { IsString, IsOptional, IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsOptional() 
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  order: string;

  @IsString()
  @IsNotEmpty()
  restaurant: string;

  @IsString()
  @IsNotEmpty()
  paid: string;

  @IsOptional()
  @IsString()
  accompany?: string;

  @IsOptional()
  @IsString()
  day?: string;

  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @IsDecimal()
  price?: number;
}
