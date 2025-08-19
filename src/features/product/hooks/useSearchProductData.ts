import {useQuery} from '@tanstack/react-query';
import {searchProduct} from './../services/searchProduct.service';

export function useSearchProductData(search: any) {
    console.log("hello world");
    const query = useQuery({
        queryFn: () => searchProduct(search),
        queryKey: ['search-product-data'],
        retry: 2
    });

    console.log(query.data);

    return {
        ...query,
        data: query.data 
    };
}