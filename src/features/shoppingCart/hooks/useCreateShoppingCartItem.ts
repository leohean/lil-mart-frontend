import { useMutation } from "@tanstack/react-query";
import { createShoppingCartItem } from "../services/createShoppingCartItem";

export function useCreateShoppingCartItem(){
    const mutate = useMutation({
        mutationFn: createShoppingCartItem,
        onError: (error: any) => {
            console.error("Error on useCreateProductMutate: ", error);
      }
    });

    return mutate;
}