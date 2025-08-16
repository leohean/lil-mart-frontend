import {useState} from 'react';
import {useRegisterMarketMutate} from './../../../features/auth/hooks/useRegisterMarketMutate.ts'

import styles from './RegisterMarket.module.css'
import Logo from './../../../components/Logo/Logo.js';
import Form from './../../../components/Form/Form.js'
import Input from './../../../components/Input/Input.js'
import ButtonPrimary from './../../../components/Button/ButtonPrimary/ButtonPrimary.js'

export default function RegisterMarket(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnpj, setCNPJ] = useState("");

    const {mutate} = useRegisterMarketMutate(); 
    const submit = (e) =>{
        e.preventDefault();
        const user ={
            name,
            email,
            password,
            cnpj,
            role:"MARKET"
        }
        mutate(user)
    }

    return(
        <section className={styles.registerMarket}>
            <Form>
                <Logo title="Novo Mercado"/>
                <Input label="Nome" type="text" placeholder="Mercadinho Dois Irmãos" value={name} updateValue={setName}/>
                <Input label="Email" type="email" placeholder="market@email.com" value={email} updateValue={setEmail}/>
                <Input label="Senha" type="password" placeholder="********" value={password} updateValue={setPassword}/>
                <Input label="CNPJ" type="text" placeholder="12.345.678/0000-11" value={cnpj} updateValue={setCNPJ}/>
                <ButtonPrimary name="Cadastrar" event={submit}/>
            </Form>
        </section>
    );
}

