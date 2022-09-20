import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { 
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black 
} from '@expo-google-fonts/inter';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import Soon from '../../assets/Soon.png'
import { Background } from '../../components/Background';

interface HomeProps{
    
}
export function Home() {

    // função para retornar as fonts depois do loading do app

    let [fontsLoaded, error] = useFonts({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black 
    })
  
    if (!fontsLoaded) {
      return <AppLoading/>;
    }
  
  
  return (
   <Background>
     <View style={styles.container}>
        <View style={styles.containerLogo}>
          <TouchableOpacity>
            <Image
              source={Soon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.contenText}>
          <Text style={styles.titleInitial}>Bem Vindo</Text>
          <Text style={styles.subTitle}>Selecione um dia e veja as ocupações dos ambientes</Text>
        </View>
      </View>
   </Background>
  );
}