import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/screens/Router";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/Loading";

function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      {fontsLoaded ? <Router /> : <Loading />}

      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
    </NavigationContainer>
  );
}

export default App;
