export interface Order {
  id?: number;
  name: string;
  order: string;
  restaurant: string;
  price?: number;
  day?: string;
  time?: string;
  paid: boolean;
  accompany?: string;
  
}
