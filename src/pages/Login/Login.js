import styles from './Login.module.css';

import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useLoginMutate} from './../../features/auth/hooks/useLoginMutate.ts';

import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js';
import Input from './../../components/Input/Input.js';
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {mutateAsync} = useLoginMutate(); 
    const navigate = useNavigate();
    const submit = async(e) =>{
        e.preventDefault();
        const loginRequest={
            email,
            password
        }
        try{
            const { role  } = await mutateAsync(loginRequest);
            
            if(role === "ROLE_USER") navigate("/");
            else if(role === "ROLE_MARKET") navigate("/MarketHome");
        }catch(error){
            console.log("Error when trying to login: " + error);
        }
    };

    return(
        <section className={styles.login}>
            <Form >
                <Logo title="Login"/>
                <Input label="Email" type="email" placeholder="Digite o email" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="Digite a sua senha" value={password} updateValue={setPassword}/>
                <ButtonPrimary name="Entrar" event={submit}/>
            </Form>
        </section>
    );
}