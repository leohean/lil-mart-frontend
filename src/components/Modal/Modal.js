import styles from './Modal.module.css'
import ButtonSecondary from './../../components/Button/ButtonSecondary/ButtonSecondary.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function Modal({children, closeModal}){
    return(
        <div className={styles.modal}>
            <div className={styles.modalBody}>
                <form>
                    <div className={styles.closeButtonGrid}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <FontAwesomeIcon icon={faX} size="2x" />  
                        </button>  
                    </div>

                    <div className={styles.modalChildren}>
                        {children}
                    </div>
                </form>
            </div>
        </div>
    );
}