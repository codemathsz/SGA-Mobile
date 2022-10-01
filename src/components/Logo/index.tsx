import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';


import LogoM from '../../assets/Soon.png'

export function Logo() {
  return (
    <Image
      source={LogoM}
      style={{width:100, height:50, position: 'relative', left: '70%', right:'50%'}}
    />

  );
}