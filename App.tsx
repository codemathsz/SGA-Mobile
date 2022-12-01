/**
 * @author Kalebe Bezerra And Matheus Oliveira
 * @since 2022
 * @augments SGA (Sistema Gerenciador de Ambientes)
 */

import React,{useEffect} from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator, StackNav } from "./src/screens/Router";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogBox } from 'react-native';

function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    LogBox.ignoreLogs(['Cannot update a component']);
  }, [])

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      {fontsLoaded ? <StackNav /> : <Loading />}

      <StatusBar
        barStyle={"light-content"}
        backgroundColor="#000"
        translucent
      />
    </NavigationContainer>
  );
}

export default App;
