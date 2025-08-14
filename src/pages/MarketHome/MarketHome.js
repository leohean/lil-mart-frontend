import styles from './MarketHome.module.css';

import {useState} from 'react';
import {useCreateProductMutate} from './../../features/product/hooks/useCreateProductMutate.ts';

import Modal from './../../components/Modal/Modal.js'
import Input from './../../components/Input/Input.js'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'

export default function MarketHome(){
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const handleOpenModal = ()=>{ setIsModalOpen(prev => !prev)}

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [unitMeasurement, setUnitMeasurement] = useState("");
    const [stockQuantity, setStockQuantity] = useState("");

    const {mutate} = useCreateProductMutate();
    const submit = (e) => {
        e.preventDefault();
        const product = {
            name,
            category,
            description,
            unitMeasurement,
            stockQuantity
        }
        mutate(product);
    }

    return(
        <section className={styles.marketHome}>
            {isModalOpen && 
                <Modal closeModal={handleOpenModal}>
                    <h2>Novo produto</h2>
                    <Input label="Nome do produto" type="text" placeholder="Digite o nome do produto" value={name} updateValue={setName}/>
                    <Input label="Categoria" type="text" placeholder="Digite a categoria do produto" value={category} updateValue={setCategory}/>
                    <Input label="Descrição" type="text" placeholder="Digite a descrição do produto" value={description} updateValue={setDescription}/>
                    <Input label="Unidade de medida" type="text" placeholder="Escolha a unidade de medida" value={unitMeasurement} updateValue={setUnitMeasurement}/>
                    <Input label="Quantidade" type="text" placeholder="Digite a quantidade" value={stockQuantity} updateValue={setStockQuantity}/>
                    <ButtonPrimary name="Cadastrar produto" event={submit}/>
                </Modal>
            }
            
            <ButtonPrimary name="Novo Produto" event={handleOpenModal}/>
        </section>
    );
}