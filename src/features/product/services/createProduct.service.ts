import {AxiosPromise} from "axios";
import api from '../../../api/axios';
import {Product} from './../interfaces/Product.interface';


export const createProduct = async(data: Product): AxiosPromise<any> =>{
    const { image, ...productData } = data;
    const response =  await api.post("/product", productData, {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  const productId = response.data.body.id;
  
  if (image) {
    const formData = new FormData();
    formData.append("image", image);

    await api.post(`/product/${productId}/image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  return response;
}