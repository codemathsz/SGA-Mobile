import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/screens/Router';
export default function App() {

  return (
    <NavigationContainer  >
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#fff'
  },
  headerNav:{
    
  }
});
