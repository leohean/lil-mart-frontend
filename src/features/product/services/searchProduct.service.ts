import api from './../../../services/axios';
import {ProductSimple} from './../interfaces/ProductSimple.interface';

export const searchProduct = async (): Promise<ProductSimple> => {
    const response = await api.get<ProductSimple>('/product/Notebook');
    return response.data;
};