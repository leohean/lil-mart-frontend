import axios from "axios";
import {useMutation} from '@tanstack/react-query';
import {updateProduct} from './../services/updateProduct.service';

import {Product} from './../interfaces/Product.interface';

export function useUpdateProductMutate (product: Product){
    const mutate= useMutation({
        mutationFn: updateProduct,
        onError: (error: any) => {
            console.error("Error on useUpdateProductMutate: ", error);
        }
    });

    return mutate;
}