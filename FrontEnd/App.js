import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ImageBackground, Image, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';
import MainTabs from './screens/MainTabs';

const backgroundImage = { uri: 'https://i.imgur.com/XF3f3hv.png' };
const logoImage = require('./assets/logo.png');

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    };
    loadUser();
  }, []);

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#7e5bef" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs user={user} setUser={setUser} /> : <AuthScreen setUser={setUser} />}
    </NavigationContainer>
  );
}

const AuthScreen = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '', babyname: '', babyInfo: '' });
  const [error, setError] = useState('');

  const handleAuth = async () => {
    if (!form.email || !form.password || (!isLogin && (!form.name || !form.babyname || !form.babyInfo))) {
      return setError('Preencha todos os campos.');
    }

    const existingUser = await AsyncStorage.getItem('user');
    if (isLogin) {
      if (!existingUser) return setError('Usuário não encontrado.');
      const parsed = JSON.parse(existingUser);
      if (parsed.email === form.email && parsed.password === form.password) {
        setUser(parsed);
      } else {
        setError('Credenciais incorretas.');
      }
    } else {
      const newUser = { ...form };
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={[tw`flex-1 justify-center`, { width: '100%', height: '100%' }]}
      resizeMode="cover"
      imageStyle={{ opacity: 0.15 }}
    >
      <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#fff' }} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={tw`px-6`}>
        <View style={styles.authBox}>
          <Image source={logoImage} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
          {!isLogin && (
            <>
              <TextInput
                placeholder="Nome completo"
                style={styles.input}
                onChangeText={text => setForm({ ...form, name: text })}
              />
              <TextInput
                placeholder="Nome do bebê"
                style={styles.input}
                onChangeText={text => setForm({ ...form, babyname: text })} // Corrigido para babyname
              />
              <TextInput
                placeholder="Meses de gestação ou idade da criança"
                style={styles.input}
                onChangeText={text => setForm({ ...form, babyInfo: text })}
              />
            </>
          )}
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={text => setForm({ ...form, email: text })}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
            onChangeText={text => setForm({ ...form, password: text })}
          />
          {error ? <Text style={tw`text-red-500 mb-2`}>{error}</Text> : null}
          <TouchableOpacity onPress={handleAuth} style={styles.button}>
            <Text style={tw`text-white text-center`}>{isLogin ? 'Entrar' : 'Cadastrar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIsLogin(!isLogin); setError(''); }} style={tw`mt-4`}>
            <Text style={tw`text-purple-700 text-center`}>{isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  authBox: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7e5bef',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#7e5bef',
    padding: 12,
    borderRadius: 10,
  },
});
