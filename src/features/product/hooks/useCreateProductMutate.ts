import axios, {AxiosPromise} from "axios";
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {createProduct} from './../services/createProduct.service';

export function useCreateProductMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
      mutationFn: createProduct,
      onError: (error: any) => {
      console.error("ERRO:", error);

      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Dados:", error.response.data);
        } else if (error.request) {
          console.error("Sem resposta da API. Request:", error.request);
        } else {
          console.error("Erro desconhecido:", error.message);
        }
      } else {
        console.error("Erro genérico:", error);
      }
    }
  });

  return mutate;
}