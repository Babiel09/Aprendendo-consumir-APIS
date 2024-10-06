import TextField from "@mui/material/TextField";
import  Botao from "../../componentes/botao/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import IRestaurante from "../../utils/IRestaurante";
import styles from './restaurantes.module.scss'
import IPrato from "../../utils/IPrato";
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function CadastroPratos() {
    const [pratos, setPratos] = useState<string>('')
    const [descriPrato, setDescriPrato] = useState<string>('')
    const [resPrato, setResPrato] = useState<string>('')
    const [restaurante, setRestaurante] = useState<IRestaurante[]>([])

      useEffect(()=>{
        axios.
        get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
        .then(respostaBackEnd=>{
          setRestaurante(respostaBackEnd.data)
        })
      },[])
      




    const navegar = useNavigate()



   
    
    const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
        axios
        .post("http://localhost:8000/api/v2/pratos/", {
          nome: pratos,
          descricao: descriPrato, 
          restaurante: resPrato
        })
        .then(()=>{
            alert('Adicionado')
        })
        .catch((erro)=>{
            alert(erro)
        })
        window.location.reload()
    }
    

    
    return(
        <>
        <form className={styles.form} onSubmit={submeter}>
          <h2>
            Cadastro <br />
            de <br />
            Prato:
          </h2>
          <div>
            <TextField
              value={pratos}
              onChange={(evento) => setPratos(evento.target.value)}
              label="Nome do Prato"
              variant="outlined"
              fullWidth
              required
            />
            <br />
            <br />
            <TextField
              value={descriPrato}
              onChange={(evento) => setDescriPrato(evento.target.value)}
              label="Descrição do Prato"
              variant="outlined"
              fullWidth
              required
            />
            <br />
            <br />
            <InputLabel id="demo-simple-select-label">Restaurantes</InputLabel>
            
            <Select

                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={resPrato}
                  label="Restaurantes"
                  onChange={(evento)=>setResPrato(evento.target.value)}
            >
            {restaurante.map((tauro, index)=>(
                <MenuItem key={index} value={tauro.id}>{tauro.nome}</MenuItem>
              ))}
            </Select>
           
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
              onClick={() => navegar("/admin/pratos")}
              color="secondary"
              nome='Finalizado'
            >
             
            </Botao>
          </div>
        </div>
      </>
    )
}