import styles from "./PurchaseCard.module.css"

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';


export default function PurchaseCard({image, name, description, category, price, unitMeasurement, stockQuantity}){

    const navigate = useNavigate();

    return(
        <div className={styles.card} 
            onClick = {() => navigate("/productpage", {state: {
                                                        image: image,
                                                        name: name,
                                                        description: description,
                                                        category: category, 
                                                        price: price, 
                                                        unitMeasurement: unitMeasurement,
                                                        stockQuantity: stockQuantity
                                                        }})
                    }>
            <img src={image}/>

            <div className={styles.purchaseGrid}>
                <div><h2>{name.length > 16 ? name.slice(0,16) + "..." : name}</h2></div>

                <div className={styles.purchaseSubgrid}>
                    <div className={styles.purchaseInfo}>
                        <h1>R${price}</h1>{unitMeasurement}
                    </div> 
                    <div className={styles.buyIcon}>
                        <FontAwesomeIcon icon={faBasketShopping} size="2x" className={styles.logoIcon} />
                    </div>
                </div>  
            </div>

        </div>
    )
}