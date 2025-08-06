import Logo from './../../components/Logo/Logo.js';
import Form from './../../components/Form/Form.js'
import Input from './../../components/Input/Input.js'
import Button from './../../components/Button/Button.js'


export default function Login(){
    return(
        <div>
            <Form >
                <Logo title=""/>
                <Input label="Email" type="email" placeholder="Digite o email"/>
                <Input label="Senha" type="password" placeholder="Digite a sua senha"/>
                <Button name="Entrar"/>
            </Form>
        </div>
    );
}