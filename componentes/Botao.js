import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function MeuBotao() {
  const handlePress = () => {
    Alert.alert('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço vertical disponível
    justifyContent: 'center', // Centraliza o botão verticalmente na tela
    alignItems: 'center', // Centraliza o botão horizontalmente na tela
  },
  button: {
    backgroundColor: '#e5faffff', // Sua cor de fundo
    paddingVertical: 15,
    paddingHorizontal: 40, // Adiciona largura ao botão
    borderRadius: 25, // Define o arredondamento
  },
  buttonText: {
    color: '#000', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
