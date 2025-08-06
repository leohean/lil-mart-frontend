import styles from './Home.module.css';
import hero from './../../assets/imgs/hero.png';

import Footer from './../../components/Footer/Footer.js';


export default function Home(){
    return(
        <>
        
        <main>
            <section className={styles.hero}>

                <div className={styles.title}>
                    <h1>
                        Frutas frescas e pão quentinho na sua 
                        <span> mesa!</span>
                    </h1>
                </div>
                

                <div className={styles.shape}>
                </div>

                <div className={styles.banner}>
                    <img src={hero} alt=""></img>
                </div>

            </section>
        </main>
        <Footer/>
        </>
    );
}