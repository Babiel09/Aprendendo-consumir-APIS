import TextField from "@mui/material/TextField";
import  Botao from "../../componentes/botao/index";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import IRestaurante from "../../utils/IRestaurante";
import styles from './restaurantes.module.scss'
import IPrato from "../../utils/IPrato";

export default function CadastroPratos() {
    const [pratos, setPratos] = useState<string>('')
    const navegar = useNavigate()
    
    const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        axios.post<IPrato>('http://localhost:8000/api/v2/pratos/')
        .then(()=>{
            alert('Adicionado')
        })
        .catch((erro)=>{
            alert(erro)
        })
    }
    
    
    
    return(
        <>
        <form className={styles.form} onSubmit={submeter}>
          <h2>
            Cadastro <br />
            de <br />
            Restaurante:
          </h2>
          <div>
            <TextField
              value={pratos}
              onChange={(evento) => setPratos(evento.target.value)}
              label="Nome do Restaurante"
              variant="outlined"
              fullWidth
              required
            />
          </div>
          <div></div>
          <div className={styles.botao}>
            <br />
            <Botao type="submit" nome='Enviar'>
            </Botao>
          </div>
        </form>
        <div>
          <br />
          <br />
          <div className={styles.potaro}>
            <Botao
              onClick={() => navegar("/admin")}
              color="secondary"
              nome='Finalizado'
            >
             
            </Botao>
          </div>
        </div>
      </>
    )
}