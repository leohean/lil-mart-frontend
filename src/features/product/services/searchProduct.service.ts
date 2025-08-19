import api from './../../../services/axios';
import {Product} from './../interfaces/Product.interface';

export const searchProduct = async (name: string): Promise<any> => {
  const response = await api.get<Product[]>(`/product/${name}`);
  const productsData = response.data;

  const products = await Promise.all(
    productsData.map(async (product) => {
      const imageResponse = await api.get(`/product/${product.id}/image`, {
        responseType: 'blob',
      });

      const imageUrl = URL.createObjectURL(imageResponse.data);

      return {
        ...product,
        imageUrl,
      };
    })
  );

  return products;
};