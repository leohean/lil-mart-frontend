import { useState , useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './ProductPage.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import Form from './../../components/Form/Form'
import Input from './../../components/Fields/Input/Input.js'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'
import ButtonSecondary from './../../components/Button/ButtonSecondary/ButtonSecondary.js'
import Footer from './../../components/Footer/Footer.js';

import { useCreateShoppingCartItem } from './../../features/shoppingCart/hooks/useCreateShoppingCartItem.ts'
import { getLogin } from './../../features/auth/services/getLogin.service.ts'


export default function ProductPage(){
    const location = useLocation();
    const navigate = useNavigate();

    const idProduct = location.state?.id ?? "";
    const name = location.state?.name ?? "";
    const description = location.state?.description ?? "";
    const price = location.state?.price ?? "";
    const unitMeasurement = location.state?.unitMeasurement ?? "";
    const category = location.state?.category ?? "";
    const stockQuantity = location.state?.stockQuantity ?? null;
    const image = location.state?.image ?? "";

    const [productQuantity, setProductQuantity] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const[idUser, setIdUser] = useState(null);
    const[role, setRole] = useState("");
    useEffect(() => {
        const loginInfo = async () => {
            try {
                const login = await getLogin();
                setIsLogged(true);
                setIdUser(login.id);
                setRole(login.role);
            } catch (error) {
                setIsLogged(false);
                setIdUser(null);
                setRole(null);
            }
        };
        loginInfo();
    });

    const {mutate} = useCreateShoppingCartItem();
    const submitShoppingCartitem = (e) =>{
        e.preventDefault();
        console.log("idUser ",idUser)
        console.log("idProduct ",idProduct)

        mutate({idUser, idProduct, productQuantity});
    }

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
                        value={productQuantity} 
                        updateValue={setProductQuantity}/>
                    </div>
                </div>
            </div>
            
            <ButtonPrimary icon={faBasketShopping} name="Comprar" event={isLogged? null : ()=>{ navigate("/Login") } }/>
            <ButtonSecondary icon={faCartShopping} name="Adicionar ao carrinho" event={isLogged? submitShoppingCartitem : ()=>{ navigate("/Login") } }/>
        </Form>
    </section>
    <Footer/>
    </>
);
}