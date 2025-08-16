import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';


import Form from './../../components/Form/Form'
import Logo from './../../components/Logo/Logo';

export default function Register(){
    const navigate = useNavigate();

    return(
        <section className={styles.register}>
            <Form>
                <div className={styles.registerTitle}>
                    <Logo title="O que vai ser..."/>
                </div>
                <div className={styles.options}>
                    <div className={styles.optionRegister} onClick={() => navigate('/register/registeruser')}>
                        <FontAwesomeIcon icon={faUser} size="4x"/>
                        <h3>Uma nova conta</h3>
                    </div>
                    <div className={styles.optionRegister} onClick={() => navigate('/register/registermarket')}>
                        <FontAwesomeIcon icon={faStore} size="4x"/>
                        <h3>Um novo mercado</h3>
                    </div>
                </div>
            </Form>
        </section>
    );
}