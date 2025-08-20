import { useLocation } from 'react-router-dom';
import {useSearchProductData} from './../../features/product/hooks/useSearchProductData.ts';

import styles from './Search.module.css';
import Card from './../../components/Card/Card.js';

export default function Search(){
    const location = useLocation();
    const searchParameter = location.state?.searchParameter ?? "";
    const {data}= useSearchProductData(searchParameter);

    return(
        <section>
            <div className={styles.searchGrid}>
                {data?.map(foodData => 
                <Card 
                    name={foodData.name} 
                    image={foodData.imageUrl}
                    unitMeasurement={foodData.unitMeasurement}
                />)}
                {data?.map(foodData => 
                <Card 
                    name={foodData.name} 
                    image={foodData.imageUrl}
                    unitMeasurement={foodData.unitMeasurement}
                />)}
                {data?.map(foodData => 
                <Card 
                    name={foodData.name} 
                    image={foodData.imageUrl}
                    unitMeasurement={foodData.unitMeasurement}
                />)}
            </div>
        </section>
    );
}