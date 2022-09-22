import React from 'react';

import { 
  View,
  Text, 
  Pressable, 
  Keyboard ,
  FlatList
} from 'react-native';

import { Background } from '../../components/Background';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { ProfessoresCard } from '../../components/ProfessoresCard';
import { Search } from '../../components/Search';

import { PROFESSORES } from '../../utils/professores';

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
        <FlatList
          data={PROFESSORES}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
            <ProfessoresCard
              data={item}
            />
          )}
          horizontal={false}
          showsVerticalScrollIndicator
          style={styles.list}
        />
      </Background>
    </Pressable>
  );
}