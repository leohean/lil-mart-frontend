import axios, {AxiosPromise} from "axios";
import api from './../../../services/axios';
import {ProductSimple} from './../interfaces/ProductSimple.interface';

export const createProduct = async(data: ProductSimple): AxiosPromise<any> =>{
    return await api.post("/product", data, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
}