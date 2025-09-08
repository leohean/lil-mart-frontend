import api from '../../../api/axios';

import {decodeToken} from './../../auth/utils/decodeToken';

import {ProductPage} from './../../product/interfaces/ProductPage.interface';

export const getProductsByMarket = async (): Promise<any>=> {
    const token = localStorage.getItem('token');
    
    if(token){
        const decodedToken = decodeToken(token);
        const response = await api.get<ProductPage>(`/market/${decodedToken.id}/products?page=0&size=10&sort=name,asc`);
        const products = response.data.content;

        return products;
    }
}