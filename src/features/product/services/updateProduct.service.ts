import {AxiosPromise} from "axios";
import api from '../../../api/axios';

export const updateProduct = async(data: any & {image?: File}) : AxiosPromise<any> => {
    const { id, image,...productData } = data;
    const response = api.put(`/product/${id}`, productData,  {
        headers: {
        'Content-Type': 'application/json',
        }
    });

    return response;
}