import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yypsfbasmoxdqinulmhw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function PerfilScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-lg font-bold text-purple-700`}>Perfil do usuário</Text>
    </View>
  );
}
