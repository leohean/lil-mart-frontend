import {useQuery} from '@tanstack/react-query';
import {getProductsByMarket} from './../services/getProductsByMarket.service';

export function useGetProductsByMarket(){
    const query = useQuery({
        queryFn: getProductsByMarket,
        queryKey: ['search-product-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data 
    };
}