import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IRestaurante from "../../utils/IRestaurante";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./admin.module.scss";
import Header from "../../componentes/NavBar";
import Footer from "../../componentes/Rodape/index";
import Banner2 from "../../componentes/banner2";
import Botao from "../../componentes/botao";
import { useNavigate } from "react-router-dom";
export default function ADM() {
  const [restaurantes, setRestaurante] = useState<IRestaurante[]>([]);
  const navegar = useNavigate();
  useEffect(() => {
    axios
      .get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
      .then((resposta) => {
        console.log(resposta);
        setRestaurante(resposta.data);
      })
      .catch((erro) => {
        alert(erro);
      });
  }, []); //Estou usando o useEffect para mostrar tudo qunado a página é carregada

  return (
    <>
      <Header />
      <Banner2 />
      <div className={styles.container}>
        <Table component={Paper}>
          <TableHead>
            <TableRow className={styles.head}>
              <TableCell>RESTAURANTES PARCEIROS ⬇:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((restaurante) => (
              <TableRow key={restaurante.id} className={styles.restaura}>
                <TableCell>{restaurante.nome}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <Botao
          onClick={() => navegar("/cadastro/restaurantes")}
          nome={"Cadastrar novo restaurante"}
        ></Botao>
      </div>
      <Footer />
    </>
  );
}
