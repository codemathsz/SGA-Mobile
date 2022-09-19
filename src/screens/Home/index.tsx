import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import Soon from '../../assets/Soon.png'
import { Background } from '../../components/Background';

interface HomeProps{
    
}
export function Home() {

  
  
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
          <Text>Bem Vindo</Text>
          <Text style={styles.subTitle}>Selecione um dia e veja as ocupações dos ambientes</Text>
        </View>
      </View>
   </Background>
  );
}