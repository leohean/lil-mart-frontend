import {useState} from 'react';
import {useUserMutate} from './../../hooks/useUserMutate.ts'
import {UserData} from './../../interfaces/UserData';
import type { FormEvent } from 'react';

import styles from './RegisterUser.module.css'
import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js'
import Input from './../../components/Input/Input.js'
import Button from './../../components/Button/Button.js'

export default function RegisterUser(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birth, setBirth] = useState("");
    const [cpf, setCpf] = useState("");

    const {mutate} = useUserMutate(); 

    const submit = (e: FormEvent) =>{
        e.preventDefault();
        const userData: UserData ={
            name,
            email,
            password,
            birth,
            cpf,
            role:"USER"
        }
        mutate(userData)
    }

    return(
        <div className={styles.registerUserForm}>
            <Form >
                <Logo title=""/>
                <Input label="Nome" type="text" placeholder="Digite o nome" value={name} updateValue={setName}/>
                <Input label="Email" type="email" placeholder="Digite o email" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="Digite a sua senha" value={password} updateValue={setPassword}/>
                <Input label="Data de Nascimento" placeholder="" type="date" value={birth} updateValue={setBirth}/>
                <Input label="CPF" type="text" placeholder="Digite o CPF" value={cpf} updateValue={setCpf}/>
                <Button name="Cadastrar" event={submit}/>
            </Form>
        </div>
    );
}

