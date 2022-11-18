import React, { useState } from "react";
import { View, TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { Aula } from "../../screens/Home";

import { THEME } from "../../themes";

import { styles } from "./styles";

import Ionicons from 'react-native-vector-icons/Ionicons';


interface Props extends TouchableOpacityProps {
  data: Aula;
  valueModal: any
  idItem: any
}
export function InicioCard({ data, valueModal, idItem }: Props) {

  const [showModal, setShowModal] = useState(false)

  function validModal() {
    if (showModal == true) {
      valueModal(false)
    } else {
      valueModal(true)
    }
  }

  return (
    <View style={styles.container} >

      <View style={styles.titleEnvironment}>
        <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.LG, color: THEME.COLORS.AZUL_500 }}>{data.ambiente.nome}</Text>
      </View>

      <TouchableOpacity style={styles.card}
        onPress={() => [validModal(), idItem(data)]}
      >
        <View style={styles.header}>
          <View style={styles.subTitleHeader}>
            <View>
              <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE }}>Periodo</Text>
            </View>
            <View>
              <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE }}>Aula</Text>
            </View>
            <View>
              <Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE }}>Professor</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Manha */}
          <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center' }}>
            <View>
              <Text> <Ionicons name='sunny' size={18} color={'#FFF974'} /></Text>
            </View>
          </View>
          <View style={styles.containerNameClass}>
            {
              data.periodo === 'MANHA' ? (
                <Text>
                  {data.unidadeCurricular.nome}
                </Text>
              ) : (
                '')
            }
          </View>
          <View style={{ width: '46%', justifyContent: 'center', alignItems: 'center' }}>
            {
              data.periodo === 'MANHA' ? (
                <Text>
                  {data.professor.nome}
                </Text>
              ) : (
                '')
            }
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Tarde */}
          <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View>
              <Text> <Ionicons name='partly-sunny' size={15} color={'#38BAF2'} /></Text>
            </View>

          </View>
          <View>
            {
              data.periodo === 'TARDE' ? (
                <Text>
                  {data.unidadeCurricular.nome}
                </Text>
              ) : (<Text>Ambiente</Text>)
            }
          </View>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }} >
            {
              data.periodo === 'TARDE' ? (
                <Text>
                  {data.professor.nome}
                </Text>
              ) : ('')
            }
          </View>
        </View>
        <View style={styles.containerPeriodos}>{/* Noite */}
          <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
            <View>
              <Text> <Ionicons name='moon' size={15} color={'#3B0665'} /></Text>
            </View>
          </View>
          <View>
            {
              data.periodo === 'NOITE' ? (
                <Text>
                  {data.unidadeCurricular.nome}
                </Text>
              ) : (
                '')
            }
          </View>
          <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }} >
            {
              data.periodo === 'NOITE' ? (
                <Text>
                  {data.professor.nome}
                </Text>
              ) : (
                '')
            }
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

}
