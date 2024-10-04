import Banner2 from "../../componentes/banner2";
import Header from "../../componentes/NavBar";
import TextField from "@mui/material/TextField";
import styles from "./cadastro.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export default function Cadastro() {
  const [nomeRes, setNomeRes] = useState<string>("");

        

  const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    axios.post('http://localhost:8000/api/v2/restaurantes/', {
        nome:nomeRes
    })
        .then(enviar=> {
            console.log('Enviou', enviar)
        })
        .catch(erro=>{
            console.log(erro)
        })
  };

  return (
    <>
      <Header />
      <Banner2 />
      <form className={styles.form} onSubmit={submeter}>
        <h2>Cadastro de Restaurante:</h2>
        <div>
          <TextField
            value={nomeRes}
            onChange={(evento) => setNomeRes(evento.target.value)}
            label="Nome do Restaurante"
            variant="outlined"
            required
          />
        </div>
        <div></div>
        <div className={styles.botao}>
          <br />
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
}
