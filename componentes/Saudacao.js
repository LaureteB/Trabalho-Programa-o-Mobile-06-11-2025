import React from "react";
import { Text } from "react-native";


export default function Saudacao({nome}){
  return(
    <Text style={{fontSize:25, marginBottom:10, textAlign:'center'}}>
        Olá {nome}
    </Text>
  )
}