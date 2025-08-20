import styles from './Login.module.css';

import {useState} from 'react';
import {useLoginMutate} from './../../features/auth/hooks/useLoginMutate.ts';

import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js';
import Input from './../../components/Fields/Input/Input.js';
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js';


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {mutate} = useLoginMutate(); 
    const submit = (e) =>{
        e.preventDefault();
        setError("");
        if(email.trim()==='' && password.trim()===''){
            setError("É necessário informar o email e a senha");
        }
        mutate({email, password});
    };

    return(
        <section className={styles.login}>
            <Form >
                <Logo title="Login"/>
                <Input label="Email" type="email" placeholder="Digite o email" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="Digite a sua senha" value={password} updateValue={setPassword}/>
                <span>{error}</span>
                <ButtonPrimary name="Entrar" event={submit}/>
            </Form>
        </section>
    );
}