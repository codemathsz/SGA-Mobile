import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { Aula } from '../../screens/Home';

import { styles } from './styles';

interface Props {
  data : Aula
}

export function ModalHome({valueShowModal, data}) {
  return (
    <View style={styles.contentModal}>
    <View style={styles.modal}>
      <View style={styles.headerModal}>
        <View><Text style={styles.titleHeaderModal}>Informações da Aula</Text></View>
        <TouchableOpacity
          onPress={() => valueShowModal(false)}
        >
          <Text style={styles.closeModal}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Ambiente:</Text>
        <Text style={styles.textEnviroment}>{data?.ambiente?.nome}</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Aula: </Text>
        <Text style={{ color: '#000' }}>{data?.unidadeCurricular?.nome}</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Carga Horária UC: </Text>
        <Text style={{ color: '#000' }}>{data?.unidadeCurricular?.horas} horas</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Carga Diaria: </Text>
        <Text style={{ color: '#000' }}>{data?.cargaDiaria} horas</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Professor(a): </Text>
        <Text style={{ color: '#000' }}>{data?.professor?.nome}</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Período: </Text>
        <Text style={{ color: '#000' }}>{data?.periodo}</Text>
      </View>
      <View style={styles.contentInfosModal}>
        <Text style={styles.titleInfoLesson}>Código da Turma: </Text>
        <Text style={{ color: '#000' }}>{data?.codTurma}</Text>
      </View>
    </View>
  </View>
  );
}