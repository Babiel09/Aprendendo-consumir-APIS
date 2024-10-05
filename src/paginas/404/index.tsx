import QUatroQuatro from '../../assets/404 Error with a cute animal-bro.gif';
import Header from '../../componentes/NavBar';
import Footer from '../../componentes/Rodape';
import styles from './notfound.module.scss'

export default function NotFound() {
    return(
        <>
        <Header/>
        <div className={styles.container}>
            <img
            src={QUatroQuatro}
            width={800}
            />
        </div>
        <Footer/>
        </>
    )
}