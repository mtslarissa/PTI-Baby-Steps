import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ setUser, navigation }) {

  // Função para logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user'); // Limpa os dados do usuário do AsyncStorage
      setUser(null); // Remove o usuário do estado global
      navigation.navigate('Login'); // Redireciona para a tela de Login
    } catch (e) {
      console.error('Erro ao sair', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configurações</Text>

      {/* Opção de editar perfil */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('EditProfile')} // Navega para a tela de editar perfil
      >
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>

      {/* Opção de editar informações do bebê */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('EditBabyInfo')} // Navega para a tela de editar informações do bebê
      >
        <Text style={styles.buttonText}>Editar Informações do Bebê</Text>
      </TouchableOpacity>

      {/* Botão de logout */}
      <TouchableOpacity 
        style={[styles.button, styles.logoutButton]} 
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Cor de fundo clara
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333', // Cor escura para o título
  },
  button: {
    backgroundColor: '#7e5bef', // Cor do botão
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    width: '80%', // Tamanho do botão
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF4C4C', // Cor de saída em vermelho
  },
});