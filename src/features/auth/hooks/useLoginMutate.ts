import axios from "axios";

import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import {login} from './../services/login.service'

export function useLoginMutate(){
    const navigate = useNavigate();
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
                
            if(data.role === "ROLE_USER") navigate("/");
            else if(data.role === "ROLE_MARKET") navigate("/MarketHome");    
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