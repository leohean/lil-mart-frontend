import styles from './ProductPage.module.css';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Form from './../../components/Form/Form'
import Input from './../../components/Fields/Input/Input.js'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'
import ButtonSecondary from './../../components/Button/ButtonSecondary/ButtonSecondary.js'
import Footer from './../../components/Footer/Footer.js';

export default function ProductPage(){
    const location = useLocation();

    const image = location.state?.image ?? "";
    const name = location.state?.name ?? "";
    const description = location.state?.description ?? "";
    const price = location.state?.price ?? "";
    const unitMeasurement = location.state?.unitMeasurement ?? "";
    const category = location.state?.category ?? "";
    const stockQuantity = location.state?.stockQuantity ?? null;

    const [quantity, setQuantity] = useState(null);

    return(
    <>
    <section className={styles.productPage}>
        <Form>
            <div className={styles.productTitle}>
                <span>{name}</span>
            </div>
            <div className={styles.productPageGrid}>
                <div className={styles.productImage}>
                    <img src={image}/>
                </div>
                
                <div className={styles.productInfo}>
                    <div>
                        <h4>Sobre o produto</h4>{description}
                    </div>
                    <div>
                        <h4>Preço</h4>R${price} - {unitMeasurement}
                    </div>
                    <div>
                        <h4>Categoria</h4>{category}
                    </div>
                    <div>
                        <h4>Estoque disponível</h4>{stockQuantity}
                    </div>
                    <div>
                        <Input 
                        label="Quantidade" 
                        type="text" 
                        placeholder="Quanto você deseja?" 
                        value={quantity} 
                        updateValue={setQuantity}/>
                    </div>
                </div>
            </div>
            
            <ButtonPrimary icon={faBasketShopping} name="Comprar"/>
            <ButtonSecondary icon={faCartShopping} name="Adicionar ao carrinho"/>
        </Form>
    </section>
    <Footer/>
    </>
);
}