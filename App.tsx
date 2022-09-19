import React from 'react'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/screens/Router';
import { StatusBar } from 'react-native';


function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
  <NavigationContainer >
    <Router/>
    <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
  </NavigationContainer>
  );
}

export default App