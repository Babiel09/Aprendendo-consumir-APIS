import Banner2 from "../../componentes/banner2";
import Header from "../../componentes/NavBar";
import TextField from "@mui/material/TextField";
import styles from "./cadastro.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../componentes/Rodape";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../utils/IRestaurante";

export default function Cadastro() {
  const parametros = useParams();
  const navegacao = useNavigate();
  const [nomeRes, setNomeRes] = useState<string>("");

  const navegar = useNavigate();

  const submeter = (evento: React.FormEvent<HTMLFormElement>) => {
    if (parametros.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`,
        {
          nome: nomeRes,
        })
          .then((enviar) => {
            console.log("Atualizou", enviar);
          })
          .catch((erro) => {
            console.log(erro);
          });
    } else {
      axios
        .post("http://localhost:8000/api/v2/restaurantes/", {
          nome: nomeRes,
        })
        .then((enviar) => {
          console.log("Enviou", enviar);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  };

  return (
    <>
      <Header />
      <Banner2 />
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
            onClick={() => navegar("/admin/restaurantes")}
            color="secondary"
            variant="contained"
          >
            Voltar adm main page
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
