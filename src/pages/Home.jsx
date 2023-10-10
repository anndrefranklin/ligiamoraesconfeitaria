import styles from "./home.module.css";
import logoImage from '../assets/logoIni.png'

import { Link } from "react-router-dom";


export function Home() {
    return (

    <div className={styles.container}>
        
        <img className={styles.img} src={logoImage} alt="logo" />

        <h3 className={styles.description}>
          Trabalhamos para melhor servir nossos clientes com muito amor e
          dedicação, agradecemos a preferência.
        </h3>      
        
        <Link to="/cardapio"><button className={styles.button}>Nosso Cardápio</button></Link>
        
    </div>

    )
}