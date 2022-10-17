import React from 'react';
import { View, Image, Platform } from 'react-native';

import { styles } from './styles';


import LogoM from '../../assets/Soon.png'

export function Logo() {
  return (
    <Image
      source={LogoM}
      
      style={Platform.OS === 'ios'?{width:60, height:30} :{width:60, height:30, position: 'absolute', left:100, right: 100}}
    />

  );
}