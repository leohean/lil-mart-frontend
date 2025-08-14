import styles from './Modal.module.css'
import ButtonPrimary from './../../components/Button/ButtonPrimary/ButtonPrimary.js'

export default function Modal({children, closeModal}){
    return(
        <div className={styles.modal}>
            <div className={styles.modalBody}>
                <form className="inputContainer">
                    <ButtonPrimary name="X" event={closeModal}/>
                    {children}
                </form>
            </div>
        </div>
    );
}