import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../componentes/NavBar";
import Footer from "../../../componentes/Rodape";
import Banner2 from "../../../componentes/banner2";
import Botao from '../../../componentes/botao/index'
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import styles from './adm-pratos.module.scss'
import IPrato from "../../../utils/IPrato";
import IRestaurante from "../../../utils/IRestaurante";
import Header2 from "../../../componentes/header admin";

export default function ADMPratos() {
    
    
    
    const [pratoRes, setPratoRes] = useState<IPrato[]>([])  
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
    const parametros = useParams()
    const navegar = useNavigate();
    
    //Pegando os pratos da API
  useEffect(()=>{
    axios.get<IPrato[]>('http://localhost:8000/api/v2/pratos/')
    .then(resposta=>{
      setPratoRes(resposta.data)
    })
  },[])

  useEffect(()=>{
    axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
    .then(resposta=>{
      setRestaurantes(resposta.data)
    })
  },[])
    


  //Função para deletar pratos:
  const Deletar = (pratoParaSerDeletado:IPrato) => {
    axios
    .delete<IPrato>(`http://localhost:8000/api/v2/pratos/${pratoParaSerDeletado.id}/`)
    .then(()=>{
      const restoPratos = pratoRes.filter(prato=> prato.id!== pratoParaSerDeletado.id)
      setPratoRes([...restoPratos])
    })
  }
    
    return (
        <>
          <Header2 />
          <Banner2 />
          <div className={styles.container}>
            <Table component={Paper}>
              <TableHead>
                <TableRow className={styles.head}>
                  <TableCell>PRATOS:</TableCell>
                  <TableCell>EDITAR PRATOS:</TableCell>
                  <TableCell>DELETAR PRATOS:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
             
                 {pratoRes.map((prato)=>(
                   <TableRow className={styles.restaura} >
                    <TableCell key={prato.id}>{prato.nome}</TableCell>   
                    <TableCell key={prato.id}><Link to={`cadastro/pratos/${prato.id}`} className={styles.link}>editar</Link></TableCell>   
                    <TableCell key={prato.id}><Botao nome='excluir' color="error"onClick={()=>Deletar(prato)}></Botao></TableCell>   
                    </TableRow>  
                ))}  
                
                </TableBody>
                </Table>
                </div>
          <div>
            <Botao
              onClick={() => navegar("cadastro/pratos")}
              nome={"Cadastrar novo Prato"}
            >
    
            </Botao>
          </div>
          <div>
            <Outlet/>
          </div>
          <Footer />
        </>
      );
}