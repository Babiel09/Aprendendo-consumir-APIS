import { Outlet } from "react-router-dom";
import BotaoProps from "../../utils/botao";
import styles from "./botao.module.scss";
import { Button } from "@mui/material";
export default function Botao({ onClick, nome, type, color,children}: BotaoProps) {
  return (
    <div className={styles.botao}>
      <Button onClick={onClick} type={type} variant="contained" color={color} >
        {nome}
      </Button>
      {children}
    </div>
  );
}
