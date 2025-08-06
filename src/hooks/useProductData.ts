import {useQuery} from '@tanstack/react-query';
import axios, {AxiosPromise} from "axios"
import {ProductData} from './../interfaces/ProductData';
import api from './../services/axios.ts'; // ou o caminho correto do seu arquivo


const fetchData = async (): Promise<ProductData> => {
    const response = await api.get<ProductData>('/product/Notebook');
    return response.data;
};

export function useProductData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data // Agora é do tipo ProductData diretamente
    };
}