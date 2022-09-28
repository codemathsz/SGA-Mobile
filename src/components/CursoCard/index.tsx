import React, { useState } from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, Text } from 'react-native';

import { styles } from './styles';

import IconCurso from '../../assets/icon_curso.png'
import { Curso } from '../../screens/Courses';


interface Props extends TouchableOpacityProps {
  data: Curso
}
export function CursoCard({ data }: Props) {

  console.log(data)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} >
        <View style={styles.informations}>
          <View>
            <Image
              source={IconCurso}
              style={{
                width: 60,
                height: 60,
                borderRadius: 15
              }}
            />
          </View>
          <View style={styles.contentText} >
            <Text style={styles.txtName}>{data.nome}</Text>
            <Text style={styles.txtCH}>Carga Horária: 0Hrs</Text>
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