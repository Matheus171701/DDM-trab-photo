import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Informações',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign size={28} style={{ marginBottom: -3 }} name={focused ? 'infocirlce' : 'infocirlceo'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Redes Sociais',
          tabBarIcon: ({ color, focused }) => (
            <Foundation size={28} style={{ marginBottom: -3 }} name={focused ? 'social-github' : 'social-github'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
