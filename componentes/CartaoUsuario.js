import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";
import fotos from '../img/fotos';

export default function CartaoUsuario({nome, descricao, img}){
    return(
        <View style={estilos.cartao}>
            <Image source={fotos[img]} style={estilos.foto}/>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao:{
        backgroundColor:'#eaf8ffff',
        padding:16,
        marginTop:15,
        borderRadius:10,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset:{width:0, height:2},
        shadowRadius:5,
        elevation:5,
    },
    foto:{ width:80, height:80, borderRadius:40, marginBottom:10},
    nome:{fontSize:18, fontWeight:'bold'},
    descricao:{fontSize:14, color:'#555', textAlign:'center'}
});