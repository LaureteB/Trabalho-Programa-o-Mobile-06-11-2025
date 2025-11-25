import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function FotoPerfil() {
    return (
        // O contêiner View agora gerencia o posicionamento do seu filho (a Image)
        <View style={styles.container}>
            <Image
                source={require('../img/perfil0.png')}
                style={styles.imagemPerfil}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // contêiner ocupe toda a altura disponível da tela
        alignItems: 'center', // Centraliza o conteúdo (a imagem) horizontalmente
    },
    imagemPerfil: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 3000,
        gap: 20,
    },
});
