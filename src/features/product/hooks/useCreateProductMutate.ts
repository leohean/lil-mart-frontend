import axios from "axios";
import {useMutation} from '@tanstack/react-query';
import {createProduct} from './../services/createProduct.service';
import {Product} from './../interfaces/Product.interface';

export function useCreateProductMutate(product: Product){
    const mutate = useMutation({
      mutationFn: createProduct,
      onError: (error: any) => {
        console.error("Error on useCreateProductMutate: ", error);
      }
  });

  return mutate;
}