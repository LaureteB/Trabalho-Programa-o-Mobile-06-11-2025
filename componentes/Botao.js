import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function MeuBotao() {
  const [isFollowing, setIsFollowing] = useState(false); 

  const buttonText = isFollowing ? 'DEIXAR DE SEGUIR' : 'SEGUIR+';
  const alertTitle = isFollowing ? 'Seguindo' : 'Não Seguindo';

  const handlePress = () => {
    setIsFollowing(!isFollowing); 

    //n está funcionando
    const newAlertMessage = isFollowing 
      ? 'Você parou de seguir!' 
      : 'Você começou a seguir!';
      
    Alert.alert(alertTitle, newAlertMessage);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
      
        <Text style={styles.buttonText}>{buttonText}</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: '#eaf8ffff',
    paddingVertical: 15,
    paddingHorizontal: 40, 
    borderRadius: 25, 
  },
  buttonText: {
    color: '#000', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});