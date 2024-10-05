import QUatroQuatro from '../../assets/404 Error with a cute animal-bro.gif';
import Header from '../../componentes/NavBar';
import Footer from '../../componentes/Rodape';
import styles from './notfound.module.scss'

export default function NotFound() {
    return(
        <>
        <Header/>
        <div className={styles.container}>
        <div className={styles.resto}>
            <h3>PAGE NOT FOUND</h3>
            </div>
            <img
            src={QUatroQuatro}
            width={800}
            />
           
        </div>
        <Footer/>
        </>
    )
}