import styles from "./ButtonSecondary.module.css"

export default function ButtonSecondary({name, event}){
    return(
        <button className={styles.buttonSecondary} onClick={event}>
            {name}
        </button>
    );
}