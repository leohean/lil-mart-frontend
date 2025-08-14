import axios, {AxiosPromise} from "axios";
import api from './../../../services/axios';
import {Market} from './../interfaces/Market.interface';

export const registerMarket = async(data: Market): AxiosPromise<any> => {
    return api.post("/auth/registermarket", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}