import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-vindo(a), {user.name}!</Text>
      </View>

      <Image
        source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/60b040ceb1e27c5bd899af04aab4a2a0' }}
        style={styles.babyImage}
      />
      
      <Text style={styles.babyInfo}>Seu bebê está com {user.babyInfo}</Text>

      <TouchableOpacity style={styles.button} onPress={() => alert('Ação de botão')}>
        <Text style={styles.buttonText}>Ver mais detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Cor de fundo suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  babyImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4CAF50',
  },
  babyInfo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
