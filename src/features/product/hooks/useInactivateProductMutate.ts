import axios from "axios";
import {useMutation} from '@tanstack/react-query';
import { inactivateProduct } from '../services/inactivateProduct.service';


export function useInactivateProductMutate(id: number){
    const mutate = useMutation({
      mutationFn: inactivateProduct,
      onError: (error: any) => {
        console.error("Error on useInactivateProductMutate: ", error);
      }
    });
    return mutate;
}