import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, Text } from 'react-native';

import { styles } from './styles';

import IconCurso from '../../assets/icon_curso.png'
export interface CursoCardProps{
  id: string
  name: string
  cargaHoraria: string
  tipoCurso: string
}

interface Props extends TouchableOpacityProps{
  data: CursoCardProps
}
export function CursoCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image
          source={IconCurso}
          style={{
            width:20,
            height:20
          }}
        />
        <Text>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}