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
    <View style={styles.container}>
        <TouchableOpacity style={styles.content} {...rest}>
          <View style={styles.informations}>
            <Image
              source={IconCurso}
              style={{
                width:60,
                height:60,
                borderRadius:15
              }}
            />
            <View style={styles.contentText}>
              <Text style={styles.txtName}>{data.name}</Text>
              <Text style={styles.txtCH}>Carga Horária:{data.cargaHoraria}</Text>
            </View>
          </View>
          <View>
              <TouchableOpacity style={styles.typeCourse}>
                <Text style={styles.txtType}>{data.tipoCurso}</Text>
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
    </View>
  );
}