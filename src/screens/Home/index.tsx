import React from 'react';
import { View, Button } from 'react-native';

import { styles } from './styles';

interface Props{
    
}
export function Home({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <Button  onPress={() => navigation.navigate("Teachers")} title="Go Teachers"/>
    </View>
  );
}