import styles from './Logo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

export default function Logo({title}){
    return(
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faAppleWhole} size="2x" className={styles.logoIcon} />   
                <h1><span>{title}</span></h1>
            </div>
    );
}