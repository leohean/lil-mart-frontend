import { useLocation } from 'react-router-dom';
import {useSearchProductData} from './../../features/product/hooks/useSearchProductData.ts';

import styles from './Search.module.css';
import Card from './../../components/Card/PurchaseCard/PurchaseCard.js';

export default function Search(){
    const location = useLocation();
    const searchParameter = location.state?.searchParameter ?? "";
    const {data}= useSearchProductData(searchParameter);

    return(
        <section>
            <div className={styles.searchGrid}>
                {data?.map(productData => 
                <Card 
                    image={productData.image}
                    name={productData.name}
                    category={productData.category}
                    description = {productData.description}
                    price={productData.price}
                    unitMeasurement={productData.unitMeasurement}
                    stockQuantity = {productData.stockQuantity}
                />)}
            </div>
        </section>
    );
}