import React from "react";
import { View, TouchableOpacityProps, Text } from "react-native";
import { Aula } from "../../screens/Home";

import { THEME } from "../../themes";

import { styles } from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props extends TouchableOpacityProps {
  data: Aula;
}
export function InicioCard({ data, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={{ width: '70%' }}>
            <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE }}>{data.ambiente.nome}</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE }}>Professor</Text>
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Manha */}
          <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View>
              <Text> <Ionicons name='sunny' size={15} color={'#FFF974'} /></Text>
            </View>
            <View>
              <Text>
                {data.unidadeCurricular.nome}
              </Text>
            </View>
          </View>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{data.professor.nome}</Text>
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Tarde */}
          <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View>
              <Text> <Ionicons name='partly-sunny' size={15} color={'#38BAF2'} /></Text>
            </View>
            <View>
              <Text>
                {data.unidadeCurricular.nome}
              </Text>
            </View>
          </View>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }} >
            <Text>{data.professor.nome}</Text>
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Noite */}
          <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View>
              <Text> <Ionicons name='moon' size={15} color={'#3B0665'} /></Text>
            </View>
            <View>
              <Text>
                {data.unidadeCurricular.nome}
              </Text>
            </View>
          </View>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }} >
            <Text>{data.professor.nome}</Text>
          </View>
        </View>
      </View>
    </View>
  );

}
