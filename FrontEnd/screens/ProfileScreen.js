import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function ProfileScreen({ user }) {
  return (
    <View style={tw`flex-1 bg-gray-100 p-6`}>
      {/* Cabeçalho com título */}
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-purple-700`}>Perfil do Usuário</Text>
      </View>

      {/* Avatar do usuário */}
      <View style={tw`items-center mb-6`}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4b2c25e128b3d828a46830dc9108ce35' }}
          style={tw`w-32 h-32 rounded-full border-4 border-purple-700`}
        />
      </View>

      {/* Informações do usuário */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-xl font-semibold text-gray-800`}>Nome: {user.name}</Text>
        <Text style={tw`text-lg text-gray-600`}>Email: {user.email}</Text>
        <Text style={tw`text-lg text-gray-600`}>Nome/bebe: {user.babyname}</Text>
        <Text style={tw`text-lg text-gray-600`}>Gestação/Criança: {user.babyInfo}</Text>

      </View>

      {/* Botão de editar perfil */}
      <TouchableOpacity
        style={tw`bg-purple-700 py-3 rounded-lg shadow-md mt-4`}
        onPress={() => alert('Editar Perfil')}
      >
        <Text style={tw`text-white text-center text-lg font-bold`}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
