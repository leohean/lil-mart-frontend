import styles from "./InformationCard.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';


export default function InformationCard({image, name, description, category, price, unitMeasurement, stockQuantity, eventEdit, eventExclude}){
    return(
        <div className={styles.card}>
            <img src={image}/>

            <div className={styles.cardGrid}>
                
                <div className={styles.cardButtons}>
                    <div className={styles.buttonEdit} onClick={eventEdit}>
                        <FontAwesomeIcon icon={faPencil} />   
                    </div>
                    <div className={styles.buttonExclude} onClick={eventExclude}>
                        <FontAwesomeIcon icon={faX} />
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <div>
                        <div>
                            <h4>Nome:</h4> {name.length > 16 ? name.slice(0,16) + "..." : name}
                        </div>
                        <div>
                            <h4>Descrição:</h4> {description}
                        </div>
                    </div>

                    <div>
                        <div>
                            <h4>Categoria:</h4> {category}
                        </div>
                        <div>
                            <h4>Unidade de medida:</h4> {unitMeasurement}
                        </div>
                    </div>

                    <div>
                        <div>
                            <h4>Valor:</h4> R${price}
                        </div> 
                        <div>
                            <h4>Qtd. no estoque:</h4> {stockQuantity}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}