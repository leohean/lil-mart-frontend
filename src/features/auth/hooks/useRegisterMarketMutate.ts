import axios from "axios"
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {registerMarket} from './../services/registerMarket.service'

export function useRegisterMarketMutate(){
    const mutate = useMutation({
        mutationFn: registerMarket,
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
