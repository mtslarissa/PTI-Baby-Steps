import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function DiarioScreen() {
  const [entry, setEntry] = useState(''); // Estado para a nova entrada do diário
  const [entries, setEntries] = useState([]); // Estado para armazenar entradas anteriores
  const [progress, setProgress] = useState([]); // Estado para armazenar o progresso do bebê

  // Função para salvar uma nova entrada do diário
  const handleSaveEntry = () => {
    if (entry.trim()) {
      setEntries([...entries, entry]); // Adiciona a nova entrada ao histórico
      setEntry(''); // Limpa a área de texto após salvar
    }
  };

  // Função para adicionar progresso do bebê
  const handleAddProgress = (newProgress) => {
    if (newProgress.trim()) {
      setProgress([...progress, newProgress]); // Adiciona o novo progresso ao histórico
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-6`}>
      {/* Cabeçalho */}
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-2xl font-bold text-purple-700`}>
          Diário do Bebê
        </Text>
      </View>

      {/* Área para escrever a nova entrada */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-lg text-gray-800 mb-2`}>
          Escreva uma nova entrada:
        </Text>
        <TextInput
          style={tw`h-32 p-4 bg-white border border-gray-300 rounded-lg shadow-sm`}
          multiline
          placeholder="Digite aqui..."
          value={entry}
          onChangeText={setEntry}
        />
      </View>

      {/* Botão para salvar a entrada */}
      <TouchableOpacity
        style={tw`bg-purple-700 py-3 rounded-lg shadow-md mt-4`}
        onPress={handleSaveEntry}>
        <Text style={tw`text-white text-center text-lg font-bold`}>
          Salvar Entrada
        </Text>
      </TouchableOpacity>

      {/* Exibição das entradas anteriores */}
      <ScrollView style={tw`mt-6`}>
        {entries.length > 0 ? (
          <View>
            <Text style={tw`text-xl font-bold text-purple-700 mb-4`}>
              Entradas do Diário:
            </Text>
            {entries.map((entry, index) => (
              <View
                key={index}
                style={tw`bg-white p-4 mt-2 rounded-lg shadow-sm`}>
                <Text style={tw`text-lg text-gray-800`}>{entry}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={tw`text-center text-gray-600`}>
            Nenhuma entrada ainda.
          </Text>
        )}
      </ScrollView>

      {/* Progresso do Bebê */}
      <View style={tw`mt-10`}>
        <Text style={tw`text-2xl font-bold text-purple-700 mb-4`}>
          Progresso do Bebê
        </Text>

        {/* Área para adicionar progresso */}
        <TextInput
          style={tw`h-14 p-4 bg-white border border-gray-300 rounded-lg shadow-sm mb-4`}
          placeholder="Adicione um marco importante..."
          onSubmitEditing={(e) => handleAddProgress(e.nativeEvent.text)} // Salva o progresso ao pressionar "Enter"
        />
        <Text style={tw`text-lg text-gray-800 mb-2`}>
          Adicione marcos de desenvolvimento:
        </Text>

        {/* Exibição do progresso do bebê */}
        <ScrollView style={tw`max-h-40`}>
          {progress.length > 0 ? (
            progress.map((item, index) => (
              <View
                key={index}
                style={tw`bg-white p-4 mt-2 rounded-lg shadow-sm`}>
                <Text style={tw`text-lg text-gray-800`}>{item}</Text>
              </View>
            ))
          ) : (
            <Text style={tw`text-center text-gray-600`}>
              Nenhum progresso registrado ainda.
            </Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
