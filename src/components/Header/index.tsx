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

interface HeaderProps{
    title: string;
    subTitle: string;
}
export function Header({title, subTitle}: HeaderProps) {
  return (
    <View style={styles.container}>
        <View style={styles.contenText}>
          <Text style={styles.titleInitial}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
  );
}