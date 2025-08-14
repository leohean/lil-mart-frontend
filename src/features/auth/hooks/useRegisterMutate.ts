import axios from "axios";
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {register} from './../services/register.service';


export function useRegisterMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
      mutationFn: register,
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