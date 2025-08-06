import styles from "./Button.module.css"

export default function Button({name, event}){
    return(
        <button className={styles.button} onClick={event}>
            {name}
        </button>
    );
}