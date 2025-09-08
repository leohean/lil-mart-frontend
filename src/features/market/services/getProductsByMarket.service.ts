import api from '../../../api/axios';

import { getLogin } from './../../auth/services/getLogin.service';
import {ProductPage} from './../../product/interfaces/ProductPage.interface';


export const getProductsByMarket = async (): Promise<any>=> {
    const login = await getLogin();
    const id = login.id;
    
    if(id){
        const response = await api.get<ProductPage>(`/market/${id}/products?page=0&size=10&sort=name,asc`);
        const products = response.data.content;

        return products;
    }
}