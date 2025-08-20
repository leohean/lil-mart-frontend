import styles from "./ButtonPrimary.module.css"

export default function ButtonPrimary({name, event}){
    return(
        <button className={styles.buttonPrimary} onClick={event}>
            {name}
        </button>
    );
}