import React from 'react';
import { View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {ClosedCaptioning, List} from 'phosphor-react-native'

import { styles } from './styles';



interface HomeProps{
    
}
export function Home() {

  
  
  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <List/>
    </View>
  );
}