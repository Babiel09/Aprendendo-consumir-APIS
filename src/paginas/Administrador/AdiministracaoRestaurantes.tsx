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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
export default function ADM() {
  const [restaurantes, setRestaurante] = useState<IRestaurante[]>([]);
  const parametros = useParams()
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

  const Deletar = (restauranteTODelete:IRestaurante) =>{
    axios.delete<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${restauranteTODelete.id}/`)//Tava sofrendo pra fazer isso acontecer kkkkkkkkkkkkkk
      .then(()=>{
        const restoRest = restaurantes.filter(restaurante=> restaurante.id!== restauranteTODelete.id)
        setRestaurante([...restoRest])
        alert('Restaurante Deletado')
      })
      .catch(erro=>{
        alert(erro)
      })
  } 

  return (
    <>
      <Header />
      <Banner2 />
      <div className={styles.container}>
        <Table component={Paper}>
          <TableHead>
            <TableRow className={styles.head}>
              <TableCell>RESTAURANTES PARCEIROS:</TableCell>
              <TableCell>EDITAR RESTAURANTES:</TableCell>
              <TableCell>EXLUIR RESTAURANTES:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((restaurante,index) => (
              <TableRow key={index} className={styles.restaura}>
                <TableCell>{restaurante.nome}</TableCell>
                <TableCell><Link to={`/admin/cadastro/restaurantes/${restaurante.id}`} className={styles.link}>Editar</Link></TableCell>
                <TableCell><Botao nome={'Exlucuir'} color={'error'} onClick={()=> Deletar(restaurante)}></Botao></TableCell>
              </TableRow>
            ))}            
          </TableBody>
        </Table>
      </div>
      <div>
        <Botao
          onClick={() => navegar("/admin/cadastro/restaurantes")}
          nome={"Cadastrar novo restaurante"}
        ></Botao>
      </div>
      <Footer />
    </>
  );
}
