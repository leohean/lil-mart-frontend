import axios, {AxiosPromise} from "axios";
import api from './../../../services/axios';
import {User} from './../interfaces/User.interface';

export const register = async (data: User): AxiosPromise<any> => {
  return await api.post("/auth/register", data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};