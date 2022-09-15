import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/screens/Router';

export default function App() {

  return (
  <NavigationContainer>
    <Router/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
