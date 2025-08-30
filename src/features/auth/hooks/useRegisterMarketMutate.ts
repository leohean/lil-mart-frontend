import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { registerMarket } from './../services/registerMarket.service'

export function useRegisterMarketMutate(){
    const navigate = useNavigate();

    const mutate = useMutation({
      mutationFn: registerMarket,
      onSuccess: () =>{
        navigate('/login');
      },
      onError: (error: any) => {
        console.error("Error useRegisterMarketMutate: ", error);
      }
    });

    return mutate;
}
