import axios from "axios";
import { jwtDecode } from "jwt-decode";

import {useMutation, useQueryClient} from '@tanstack/react-query';
import {login} from './../services/login.service'
import {Token} from './../interfaces/Token.interface';

export function useLoginMutate(){
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log("Token recebido:", data.token);
            localStorage.setItem('token', data.token);
        },

        onError: (error: any) => {
        console.error("ERRO :", error);

        if (axios.isAxiosError(error)) {
            if(error.response){
                console.error("Status:", error.response.status);
                console.error("Dados:", error.response.data);
            }else if(error.request){
                console.error("Sem resposta da API. Request:", error.request);
            }else{
                console.error("Erro desconhecido:", error.message);
            }
        }else{
        console.error("Erro genérico:", error);
        }
        }
    });

}