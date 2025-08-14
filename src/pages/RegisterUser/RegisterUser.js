import {useState} from 'react';
import {useRegisterMutate} from './../../features/auth/hooks/useRegisterMutate.ts'

import styles from './RegisterUser.module.css'
import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js'
import Input from './../../components/Input/Input.js'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'

export default function RegisterUser(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birth, setBirth] = useState("");
    const [cpf, setCpf] = useState("");

    const {mutate} = useRegisterMutate(); 
    const submit = (e) =>{
        e.preventDefault();
        const user ={
            name,
            email,
            password,
            birth,
            cpf,
            role:"USER"
        }
        mutate(user)
    }

    return(
        <section className={styles.registerUser}>
            <Form>
                <Logo title="Nova Conta"/>
                <Input label="Nome" type="text" placeholder="Seu nome completo" value={name} updateValue={setName}/>
                <Input label="Email" type="email" placeholder="mercado@example.com" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="********" value={password} updateValue={setPassword}/>
                <Input label="Data de Nascimento" placeholder="" type="date" value={birth} updateValue={setBirth}/>
                <Input label="CPF" type="text" placeholder="123.456.789-00" value={cpf} updateValue={setCpf}/>
                <ButtonPrimary name="Cadastrar" event={submit}/>
            </Form>
        </section>
    );
}

