import styles from "./ButtonSecondary.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonSecondary({icon, name, event}){
    return(
        <button className={styles.buttonSecondary} onClick={event}>
            {icon && <FontAwesomeIcon icon={icon}/>} {name}
        </button>
    );
}