import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";
import Botao from "./componentes/Botao";

export default function App(){
  return<ScrollView  >
    <Titulo />
    <Saudacao nome='Laura Boeing'/>
    <FotoPerfil />

    <CartaoUsuario 
    nome='Jorel'
    descricao= 'programador mobile'
    img= 'perfil00'
     />
     <Botao />

    <CartaoUsuario 
    nome='Marta'
    descricao= 'programadora'
    img= 'perfil02'
     />

    <CartaoUsuario 
    nome='Marluce'
    descricao= 'design'
    img= 'perfil01'
     />
     
    <CartaoUsuario 
    nome='Robson'
    descricao= 'Mecanico'
    img= 'perfil02'
     />

    <CartaoUsuario 
    nome='Maicon'
    descricao= 'Psicologo'
    img= 'perfil00'
     />
     

    </ScrollView>
  
}