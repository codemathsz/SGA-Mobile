import React from 'react';
import { View, TouchableOpacity , Image} from 'react-native';

import { styles } from './styles';
import IconFilter from '../../assets/icon_filter.png'
export function Filter  (){
  return (

    <Image 
        source={IconFilter}
        style={{width: 20, height: 20}}
    />

  );
}