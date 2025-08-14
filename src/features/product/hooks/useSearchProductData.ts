import {useQuery} from '@tanstack/react-query';
import {searchProduct} from './../services/searchProduct.service';

export function useSearchProductData() {
    const query = useQuery({
        queryFn: searchProduct,
        queryKey: ['search-product-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data 
    };
}