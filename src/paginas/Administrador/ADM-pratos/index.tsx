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

export default function ADMPratos() {
    
    
    
    const [pratoRes, setPratoRes] = useState<IPrato[]>([])  
    const parametros = useParams()
    const navegar = useNavigate();
    
    //Pegando os pratos da API
  useEffect(()=>{
    axios.get<IPrato[]>('http://localhost:8000/api/v2/pratos/')
    .then(resposta=>{
      setPratoRes(resposta.data)
    })
  },[])
    
    
    return (
        <>
          <Header />
          <Banner2 />
          <div className={styles.container}>
            <Table component={Paper}>
              <TableHead>
                <TableRow className={styles.head}>
                  <TableCell>PRATOS DOS RESTAURANTES:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                {pratoRes.map((prato,index)=>(
                  <>
                  <TableRow className={styles.restaura}>
                    <TableCell key={prato.id}>{prato.nome}</TableCell>
                    </TableRow>     
                    </>
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