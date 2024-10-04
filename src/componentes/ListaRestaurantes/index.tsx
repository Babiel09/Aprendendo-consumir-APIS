import { useEffect, useState } from "react";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import IRestaurante from "../../utils/IRestaurante";
import axios from "axios";
import IPaginacao from "../../utils/IPaginacao";
import { useNavigate } from "react-router-dom";
import Botao from "../botao/index";

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Array<IRestaurante>>([]);
  const [next, setNext] = useState("");

  //Parte do consumo da API:
  useEffect(() => {
    //Pegar os restaurantes da API:
    axios
      .get<IPaginacao<IRestaurante>>("http://localhost:8000/api/v1/restaurantes/")
      .then((respostaBackEnd) => {
        console.log(respostaBackEnd);
        setRestaurantes(respostaBackEnd.data.results);
        setNext(respostaBackEnd.data.next);
      })
      .catch((erro) => {
        console.log(erro,"Ocorreu um erro:(");
      });
  }, []);

  //Função para mostrar os outros restaurantes
  const IrProximaPagina = () => {
    axios.get<IPaginacao<IRestaurante>>(next).then((respostabackEnd) => {
      setRestaurantes([...restaurantes, ...respostabackEnd.data.results]); 
      //Pego todos os restaurantes já existentes, mais os novos restaurantes da API.
      setNext(respostabackEnd.data.next);
    });
  };

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>TOPS</em> de BH!
      </h1>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {next && <Botao onClick={IrProximaPagina} nome={`Quero ver mais!`}></Botao>}
    </section>
  );
};

export default ListaRestaurantes;
