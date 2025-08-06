import styles from './Logo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Logo({title}){
    return(
        <div className={styles.logo}>
            <FontAwesomeIcon icon={faAppleWhole} size="2x" className={styles.logoIcon} />   
            <Link to="/">
                <h1 >{title}</h1>
            </Link> 
        </div>
    );
}