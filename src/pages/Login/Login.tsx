import styles from './Login.module.css';

import {useState} from 'react';
import {useLoginMutate} from './../../hooks/useLoginMutate.ts'
import {LoginRequest} from './../../interfaces/LoginRequest.ts';
import type { FormEvent } from 'react';

import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js'
import Input from './../../components/Input/Input.js'
import Button from './../../components/Button/Button.js'


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {mutate} = useLoginMutate(); 
    
        const submit = (e: FormEvent) =>{
            e.preventDefault();
            const loginRequest: LoginRequest ={
                email,
                password
            }
            mutate(loginRequest)
        }

    return(
        <section className={styles.login}>
            <Form >
                <Logo title="Login"/>
                <Input label="Email" type="email" placeholder="Digite o email" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="Digite a sua senha" value={password} updateValue={setPassword}/>
                <Button name="Entrar" event={submit}/>
            </Form>
        </section>
    );
}