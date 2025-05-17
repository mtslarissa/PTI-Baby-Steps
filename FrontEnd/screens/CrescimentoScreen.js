import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function CrescimentoScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg font-bold text-purple-700`}>Acompanhamento de crescimento</Text>
    </View>
  );
}
