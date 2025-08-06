import styles from './Form.module.css';

export default function Form({children}){
    return(
        <div className={styles.form}>
            {children}
        </div>
    );
}