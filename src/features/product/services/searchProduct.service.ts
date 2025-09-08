import api from '../../../api/axios';
import {Product} from './../interfaces/Product.interface';

export const searchProduct = async (name: string): Promise<any> => {
  const response = await api.get<Product[]>(`/product/${name}`);
  const products = response.data;

  return products;
};