import styles from "./ButtonPrimary.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonPrimary({icon, name, event}){
    return(
        <button className={styles.buttonPrimary} onClick={event}>
            {icon && <FontAwesomeIcon icon={icon}/>} {name}
        </button>
    );
}