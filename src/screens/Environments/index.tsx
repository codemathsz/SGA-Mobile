import React from 'react';
import { View, Text, Pressable, Keyboard, FlatList } from 'react-native';
import { AmbienteCard } from '../../components/AmbienteCard';
import { Background } from '../../components/Background';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { AMBIENTES } from '../../utils/ambientes';

import { styles } from './styles';

export function Environments() {
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Background>
        <Header title='Ambientes' subTitle='Consulte os ambientes'/>
        <View style={styles.containerSearch}>
          <Search placeholder='Buscar ambientes'/>
          <Filter/>
        </View>
        <FlatList
              data={AMBIENTES}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <AmbienteCard
                  data={item}
                />
              )}
              horizontal={false}
              showsVerticalScrollIndicator
              style={styles.list}
            >

          </FlatList> 
      </Background>
    </Pressable>
  );
}