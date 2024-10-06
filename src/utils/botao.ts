import { ReactNode } from "react";

export default interface BotaoProps{
    nome:string;
    onClick?: ()=> void;
    type?: 'submit' | 'button' |  'reset' | undefined
    color?:'success' | 'error' | 'secondary' | undefined
    children?:ReactNode
}