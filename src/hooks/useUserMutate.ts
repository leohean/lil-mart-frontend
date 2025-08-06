import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios, {AxiosPromise} from "axios"
import {UserData} from './../interfaces/UserData';
import api from './../services/axios.ts';



const postData = async (data: UserData): AxiosPromise<any> => {
  return await api.post("/auth/register", data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

export function useUserMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
  mutationFn: postData,
  onError: (error: any) => {
    console.error("❌ ERRO DETALHADO:", error);

    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("🔸 Status:", error.response.status);
        console.error("🔸 Dados:", error.response.data);
      } else if (error.request) {
        console.error("🔸 Sem resposta da API. Request:", error.request);
      } else {
        console.error("🔸 Erro desconhecido:", error.message);
      }
    } else {
      console.error("🔸 Erro genérico:", error);
    }
  }
});

    return mutate;
}