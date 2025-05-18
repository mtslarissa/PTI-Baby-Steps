import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function DicasScreen() {
  const categorias = ['Gestação', 'Primeiros meses', 'Alimentação', 'Saúde'];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Gestação');

  const dicas = {
    Gestação: [
      'Faça pré-natal regularmente.',
      'Alimente-se bem e evite estresse.',
    ],
    'Primeiros meses': [
      'Crie uma rotina de sono para o bebê.',
      'Amamentação sob livre demanda é ideal.',
    ],
    Alimentação: [
      'Introduza alimentos sólidos aos 6 meses.',
      'Evite açúcar e sal até 1 ano de idade.',
    ],
    Saúde: [
      'Mantenha as vacinas em dia.',
      'Consulte o pediatra regularmente.',
    ],
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-6`}>
      {/* Título */}
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-purple-700`}>
          Dicas para Cuidar do Bebê
        </Text>
      </View>

      {/* Botões de categorias */}
      <View style={tw`flex-row flex-wrap justify-around mb-6`}>
        {categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={[
              tw`px-4 py-2 rounded-full mb-2`,
              categoriaSelecionada === categoria
                ? tw`bg-purple-700`
                : tw`bg-purple-300`,
            ]}
            onPress={() => setCategoriaSelecionada(categoria)}
          >
            <Text style={tw`text-white font-bold`}>{categoria}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conteúdo das dicas */}
      <ScrollView style={tw`flex-1`}>
        <Text style={tw`text-xl font-bold text-purple-700 mb-4`}>
          {categoriaSelecionada}
        </Text>
        {dicas[categoriaSelecionada].map((dica, index) => (
          <View
            key={index}
            style={tw`bg-white p-4 mb-3 rounded-lg shadow-sm`}
          >
            <Text style={tw`text-lg text-gray-800`}>{dica}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
