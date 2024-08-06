import { IsString, IsOptional, IsDecimal, IsNotEmpty } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  order?: string;

  @IsOptional()
  @IsString()
  restaurant?: string;

  @IsOptional()
  @IsString()
  paid?: string;

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
