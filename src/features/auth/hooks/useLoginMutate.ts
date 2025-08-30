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
            else if(data.role === "ROLE_MARKET") navigate("/markethome");    
        },
        onError: (error: any) => {
            console.error("Error on useLoginMutate(): ", error);
        }
    });

    

}