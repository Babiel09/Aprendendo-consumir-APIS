import TextField from "@mui/material/TextField";
import styles from "./cadastro.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Cadastro() {
  const parametros = useParams();
  const [nomeRes, setNomeRes] = useState<string>("");

  const navegar = useNavigate();

  const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
    if (parametros.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`,
        {
          nome: nomeRes,
        })
          .then(()=> {
            alert('Restaurante atualizado')
          })
          .catch((erro) => {
            console.log(erro);
          });
    } else {
      axios
        .post("http://localhost:8000/api/v2/restaurantes/", {
          nome: nomeRes,
        })
        .then(() => {
          alert('Novo restaurante cadastrado');
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    navegar('/admin')
    window.location.reload()//Assim eu garanto que as modificações serão vísisveis para o ADM
  };

  return (
    <>
      <form className={styles.form} onSubmit={submeter}>
        <h2>
          Cadastro <br />
          de <br />
          Restaurante:
        </h2>
        <div>
          <TextField
            value={nomeRes}
            onChange={(evento) => setNomeRes(evento.target.value)}
            label="Nome do Restaurante"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div></div>
        <div className={styles.botao}>
          <br />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </div>
      </form>
      <div>
        <br />
        <br />
        <div className={styles.potaro}>
          <Button
            onClick={() => navegar("/admin")}
            color="secondary"
            variant="contained"
          >
           Finalizado
          </Button>
        </div>
      </div>
    </>
  );
}
