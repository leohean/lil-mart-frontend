import {AxiosPromise} from "axios";
import api from '../../../api/axios';
import {Market} from './../../market/interfaces/Market.interface';

export const registerMarket = async(data: Market): AxiosPromise<any> => {
    return api.post("/auth/registermarket", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}