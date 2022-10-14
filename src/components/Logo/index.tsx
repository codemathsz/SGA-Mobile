import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';


import LogoM from '../../assets/Soon.png'

export function Logo() {
  return (
    <Image
      source={LogoM}
      style={{width:60, height:30}}
    />

  );
}