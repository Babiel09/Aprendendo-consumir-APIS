import { TextField } from "@mui/material";
import Banner3 from "../../componentes/banner3";
import Header from "../../componentes/NavBar";
import Footer from "../../componentes/Rodape";
import styles from './login.module.scss';
import Botao from "../../componentes/botao";
import LoginLogo from '../../assets/Login.gif'


export default function Login () {
    return(
        <>
        <Header/>
        <Banner3/>
        <br />
        <br />
            <form className={styles.container}>
                
                <h2>Cadastro</h2>
                <div className={styles.titulo}>
                <TextField id="outlined-basic" label="Nome" variant="outlined" type="text" fullWidth required/>
                <br />
                <br />
                <br />
                <TextField id="outlined" label="email" variant="outlined" type="email" fullWidth required/>
                <br />
                <br />
                <br />
                <TextField id="outlined-basic" label="senha" variant="outlined" type="password" fullWidth required/>        
            <br />
            <br />
            <div className={styles.botao}>
                <Botao nome={'Enviar'} type="submit" color="success"></Botao>
            </div>     
            </div>
            <div className={styles.imagem}>
                <img src={LoginLogo} alt="imagem do Login" />        
            </div>  
            </form>
           
            <Footer/>
            
        </>
    )
}