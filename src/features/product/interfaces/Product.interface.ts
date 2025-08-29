export interface Product{
  id?: number;
  name: string;
  category: string;
  description: string;
  price: number;
  unitMeasurement: string;
  stockQuantity: string;
  image: File;
}