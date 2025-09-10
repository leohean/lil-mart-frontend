import {AxiosPromise} from "axios";
import api from '../../../api/axios';
import { ShoppingCartItem } from '../interfaces/ShoppingCartItem.interface';

export const createShoppingCartItem = async(data: ShoppingCartItem): AxiosPromise<any> =>{
    console.log(data)
    const response = api.post("/shoppingcart", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return response;
}