import {AxiosPromise} from "axios";
import api from '../../../api/axios';

export const inactivateProduct = async(id: number): AxiosPromise<any> => {
    const response = api.post(`product/${id}/inactivateproduct`, {
        headers: {
        'Content-Type': 'application/json',
        }
    });

    return response;
}