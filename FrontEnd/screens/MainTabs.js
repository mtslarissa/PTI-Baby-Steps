import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import DiarioScreen from './DiarioScreen';  // Importando a tela do diário

const Tab = createBottomTabNavigator();

export default function MainTabs({ user, setUser }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#7e5bef',
      }}
    >
      <Tab.Screen
        name="Início"
        children={() => <HomeScreen user={user} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="baby-face-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Diário"
        component={DiarioScreen}  // Associando a tela do Diário
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        children={() => <ProfileScreen user={user} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        children={() => <SettingsScreen setUser={setUser} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
