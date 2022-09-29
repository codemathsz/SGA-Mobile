import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { color } from 'react-native-reanimated';

import Photo from '../../assets/foto.png'
import { Background } from '../../components/Background';
import { THEME } from '../../themes';
import { AULAS } from '../../utils/aulas';

import { styles } from './styles';




export function ProfileTeacher({route}: any) {
  return (
    <ScrollView>
      <Background>

        <View style={styles.container} >
          <View style={styles.contentPhoto}>
            <View>
              <Image
                source={Photo}
                style={{
                  width: 200,
                  height: 200
                }}
              />
            </View>
            <View style={styles.nameTeacher}>
              <Text style={styles.name}>{route.params?.data?.nome}</Text>
            </View>
          </View>
          <View style={styles.calendar}>
            <Text> CALENDARIO!!</Text>
          </View>
          <View style={{ width: '100%', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <Text
              style={{ fontFamily: THEME.FONT_FAMILY.SEMI_BOLD, fontSize: THEME.FONT_SIZE.LG }}
            >Aulas</Text>
          </View>
          <FlatList
            data={AULAS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.containerList}>
                  <View style={styles.item}>
                    <Text>{item.dia}</Text>
                    <Text>{item.curso}</Text>
                    <Text>{item.Periodo}</Text>
                  </View>
                  <View style={styles.item}>
                    <Text>{item.dia}</Text>
                    <Text>{item.curso}</Text>
                    <Text>{item.Periodo}</Text>
                  </View>
                </View>
              </View>
            )}
            style={{ width: '100%', height: 350 }}
            /* showsVerticalScrollIndicator={true} */
          >
          </FlatList>
        </View>
      </Background>
    </ScrollView>
  );
}