import {useState} from 'react';

import styles from './MarketHome.module.css';

import {decodeToken} from './../../features/auth/utils/decodeToken.ts'
import {useGetProductsByMarket} from './../../features/market/hooks/useGetProductsByMarket.ts';
import {useCreateProductMutate} from './../../features/product/hooks/useCreateProductMutate.ts';
import {useUpdateProductMutate} from './../../features/product/hooks/useUpdateProductMutate.ts';
import {useInactivateProductMutate} from './../../features/product/hooks/useInactivateProductMutate.ts';

import Modal from './../../components/Modal/Modal.js'
import Input from './../../components/Fields/Input/Input.js'
import Select from './../../components/Fields/Select/Select.js'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'
import InformationCard from './../../components/Card/InformationCard/InformationCard.js';

export default function MarketHome(){
    const marketName = decodeToken(localStorage.getItem('token')).name;

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [actionModal, setActionModal] = useState("");
    const [error, setError] = useState("");
    
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [unitMeasurement, setUnitMeasurement] = useState("");
    const [price, setPrice] = useState(null);
    const [stockQuantity, setStockQuantity] = useState(null);
    const [image, setImage] = useState(null);

    const handleOpenModal = () => { 
        setIsModalOpen(prev => !prev)
        setError("")

        setId(null)
        setActionModal("create")
        setName("")
        setCategory("")
        setDescription("")
        setUnitMeasurement("")
        setPrice(null)
        setStockQuantity(null)
    }

    const handleOpenModalForEdit = (id, name, category, description, price, unitMeasurement, stockQuantity) => { 
        setIsModalOpen(prev => !prev)
        setError("")

        setActionModal("update")
        setId(id);
        setName(name)
        setCategory(category)
        setDescription(description)
        setPrice(price)
        setUnitMeasurement(unitMeasurement)   
        setStockQuantity(stockQuantity)
    }

    const {mutate: createProduct} = useCreateProductMutate();
    const {mutate: updateProduct} = useUpdateProductMutate();
    const {mutate: inactivateProduct} = useInactivateProductMutate();

    const submit = (e) => {
        e.preventDefault();
        const product = {
            ...(id && { id }),
            name,
            category,
            description,
            price,
            unitMeasurement,
            stockQuantity,
            image
        }

        if(name.trim()==='' && category.trim()==='' && description.trim() === '' && unitMeasurement.trim() === '' && stockQuantity === null){
            setError("Por favor, preencha todos os campos");
        }else{
            if (actionModal === "create"){
            createProduct(product, {
                onSuccess: () => {
                refetch();
                handleOpenModal();
                },
            });
            }else{
                updateProduct(product, {
                    onSuccess: () => {
                    refetch();
                    handleOpenModal();
                    },
                });
            }
        }
    }

    const {data, refetch}= useGetProductsByMarket();
    return(
        <section> 
            <div className={styles.marketName}><span>Meus Produtos</span></div>
            <div className={styles.marketHomeGrid}>
                {data?.map(productData =>
                <InformationCard 
                image ={productData.image}
                name = {productData.name}
                description={productData.description}
                category = {productData.category}
                price = {productData.price}
                unitMeasurement = {productData.unitMeasurement}
                stockQuantity = {productData.stockQuantity}
                eventEdit={() =>
                    handleOpenModalForEdit(
                    productData.id,
                    productData.name,
                    productData.category,
                    productData.description,
                    productData.price,
                    productData.unitMeasurement,
                    productData.stockQuantity
                    )
                }
                eventExclude={()=>{
                    inactivateProduct(productData.id,{
                        onSuccess: () => {
                            refetch()
                        }
                    }
                        
                    )
                }}
                />
                )}
            </div>

            {isModalOpen && 
            
                <Modal closeModal={handleOpenModal}>
                    <h2><span>{actionModal === "create"? "Novo Produto" : "Atualizar Produto"}</span></h2>
                    <Input 
                    label="Nome do produto" 
                    type="text" 
                    placeholder="Pão, manteiga, carne..." 
                    value={name} 
                    updateValue={setName}/>

                    
                    <Input 
                    label="Descrição" 
                    type="text" 
                    placeholder="Digite a descrição do produto" 
                    value={description} 
                    updateValue={setDescription}/>

                    <div className={styles.firsInputGroup}>
                        <div className={styles.firstInput}>
                        <Select
                        label="Categoria" 
                        value = {category}
                        updateValue = {setCategory}
                        options={[
                        { value: "", label: "Selecione uma categoria" },
                        { value: "Frutas", label: "Frutas" },
                        { value: "Legumes e vegetais", label: "Legumes e vegetais" },
                        { value: "Grãos e cereais", label: "Grãos e cereais" },
                        { value: "Laticínios", label: "Laticínios" },
                        { value: "Carnes", label: "Carnes" },
                        { value: "Bebidas", label: "bebidas" }
                        ]}
                        />
                        </div>

                        <div className={styles.secondInput}>
                        <Select
                        label="Unidade de medida" 
                        value = {unitMeasurement}
                        updateValue = {setUnitMeasurement}
                        options={[
                        { value: "", label: "Selecione uma unidade de medida" },
                        { value: "Unidade", label: "Unidade" },
                        { value: "Quilos", label: "Quilos" },
                        { value: "Litros", label: "Litros" }
                        ]}
                        />
                        </div>
                    </div>
                    
                    <div className={styles.secondInputGroup}>
                        <div>
                        <Input 
                        label="Preço" 
                        type="text" placeholder="Digite o preço" 
                        value={price} 
                        updateValue={setPrice}/>
                        </div>

                        <div>
                        <Input 
                        label="Quantidade" 
                        type="text" placeholder="Digite a quantidade" 
                        value={stockQuantity} 
                        updateValue={setStockQuantity}/>
                        </div>
                    </div>
                    

                    <Input 
                    label="Imagem" type="file" 
                    placeholder="" 
                    updateValue={(e) => {
                    setImage(e.target.files[0]);
                    }}/>

                    <div className={styles.errorWarning}>
                        <span>{error}</span>
                    </div>

                    <ButtonPrimary name="Salvar" event={submit}/>
                </Modal>
            }
            
            <div className={styles.buttonNewProduct}>
                <ButtonPrimary name="+ Novo Produto" event={handleOpenModal}/>
            </div>
            
        </section>
    );
}