import styles from './Nav.module.css'
import { useNavigate } from 'react-router-dom';

import Logo from './../Logo/Logo.js'
import Button from './../Button/Button.js'


export default function Nav(){
    const navigate = useNavigate();

    return(
        <header>
            <nav>
                <Logo title="Lil Mart"/>         
                

                <div className={styles.buttons}>
                    <Button name="Criar conta" event={() => navigate('/')}/>
                    <Button name="Login" event={() => navigate('/login')}/>
                </div>    
            </nav>
            
        </header>
    );
}