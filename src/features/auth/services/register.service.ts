import {AxiosPromise} from "axios";
import api from '../../../api/axios';
import {User} from './../../user/interfaces/User.interface';

export const register = async (data: User): AxiosPromise<any> => {
  return await api.post("/auth/register", data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};