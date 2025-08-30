import api from '../../../api/axios';

import {decodeToken} from './../../auth/utils/decodeToken';

import {ProductPage} from './../../product/interfaces/ProductPage.interface';

export const getProductsByMarket = async (): Promise<any>=> {
    const token = localStorage.getItem('token');
    if(token){
        const decodedToken = decodeToken(token);
        const response = await api.get<ProductPage>(`/market/${decodedToken.id}/products?page=0&size=10&sort=name,asc`);
        const productsData = response.data.content;

        const products = await Promise.all(
        productsData.map(async(product) =>{
            const imageResponse = await api.get(`/product/${product.id}/image`, {
                responseType: 'blob',
            });

            const imageUrl = URL.createObjectURL(imageResponse.data);

            return {
                ...product,
                imageUrl,
            };
        })
        );
    return products;
    }
}