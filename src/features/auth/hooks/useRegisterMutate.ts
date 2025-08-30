import {useMutation} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import {register} from './../services/register.service';


export function useRegisterMutate(){
  const navigate = useNavigate();

    const mutate = useMutation({
      mutationFn: register,
      onSuccess: () =>{
        navigate('/login');
      },
      onError: (error: any) => {
        console.error("ERROR: ", error);
      }
  });

  return mutate;
}