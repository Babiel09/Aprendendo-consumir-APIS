import { TextField } from "@mui/material";
import Banner3 from "../../componentes/banner3";
import Header from "../../componentes/NavBar";
import Footer from "../../componentes/Rodape";
import styles from "./login.module.scss";
import Botao from "../../componentes/botao";
import LoginLogo from "../../assets/Login.gif";
import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../../utils/IUser";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [emailUser, setEmailUser] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [senhaUser, setSenhaUser] = useState("");



    const navegar = useNavigate()


  const Postar = (evento: React.FormEvent<HTMLFormElement>) => {
    axios
      .post<IUser>("http://localhost:8000/api/v2/user/", {
        email: emailUser,
        username: nomeUser,
        password: senhaUser,
      })
      .then(() => {
        alert("Login Feito");
      })
      .catch((erro) => {
        alert(erro);
      });
    window.location.reload();
  };

  return (
    <>
      <Header />
      <Banner3 />
      <br />
      <br />
      <form className={styles.container} onSubmit={Postar}>
        <h2>Cadastro</h2>
        <div className={styles.titulo}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            type="text"
            fullWidth
            value={nomeUser}
            onChange={(evento) => setNomeUser(evento.target.value)}
            required
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined"
            label="email"
            variant="outlined"
            type="email"
            fullWidth
            value={emailUser}
            onChange={(evento) => setEmailUser(evento.target.value)}
            required
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="senha"
            variant="outlined"
            type="password"
            fullWidth
            value={senhaUser}
            onChange={(evento) => setSenhaUser(evento.target.value)}
            required
          />
          <br />
          <br />
          <div className={styles.botao}>
            <Botao nome={"Enviar"} type="submit" color="success" onClick={()=>navegar('/admin')}></Botao>
          </div>
        </div>
        <div className={styles.imagem}>
          <img src={LoginLogo} alt="imagem do Login" />
        </div>
      </form>

      <Footer />
    </>
  );
}
