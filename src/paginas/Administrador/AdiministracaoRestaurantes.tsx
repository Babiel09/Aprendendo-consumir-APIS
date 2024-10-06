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
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import IPrato from "../../utils/IPrato";
export default function ADM() {
  const [restaurantes, setRestaurante] = useState<IRestaurante[]>([]);
  const [pratoRes, setPratoRes] = useState('')


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
              <>
              <TableRow className={styles.restaura}>
                <TableCell key={index}>{restaurante.nome}</TableCell>
                <TableCell key={index}><Link to={`/admin/cadastro/restaurantes/${restaurante.id}`} className={styles.link}>Editar</Link></TableCell>
                <TableCell key={index}><Botao nome={'Exlucuir'} color={'error'} onClick={()=> Deletar(restaurante)}></Botao></TableCell>
                </TableRow>     
                </>
            ))}  
             
          </TableBody>
        </Table>
      </div>
      <div>
        <br />
        <Botao
          onClick={() => navegar("/admin/cadastro/restaurantes")}
          nome={"Cadastrar novo restaurante"}
        >

        </Botao>
      </div>
      <br />
      <br />
      <div>
        <Botao
        onClick={()=> navegar('/admin/pratos')}
        nome={'Deseja ver os Pratos?'}
        ></Botao>
      </div>
      <div>
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}
