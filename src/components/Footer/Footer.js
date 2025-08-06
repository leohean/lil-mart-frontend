import styles from './Footer.module.css';
import Wave from './../../assets/imgs/wave.svg'

export default function Footer(){
    return (
        <footer>
            <img src={Wave}/>

            <div className={styles.footerContent}>
                <span className={styles.copyright}>
                    &copy; Lil Mart
                </span>
            </div>
            
        </footer>
    );
}