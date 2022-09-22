import React from 'react';
import { View,Text, Pressable, Keyboard } from 'react-native';
import { Background } from '../../components/Background';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';

import { styles } from './styles';

export function Teachers() {
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Background>
        <Header title='Professores' subTitle='Consulte os professores'/>
        <View style={styles.containerSearch}>
          <Search placeholder='Busca professor'/>
          <Filter/>
        </View>
      </Background>
    </Pressable>
  );
}