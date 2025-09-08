import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import {logout} from './../services/logout.service'

export function useLogoutMutate(){
    const navigate = useNavigate();
    return useMutation({
        mutationFn: logout,
        onSuccess: (data) => {
            navigate("/");
        },
        onError: (error: any) => {
            console.error("Error on useLogoutMutate(): ", error);
        }
    });
}