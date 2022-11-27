import React, { useState } from "react";
import {
  View,
  TouchableOpacityProps,
  Text,
  TouchableOpacity,
} from "react-native";
import { Aula } from "../../screens/Home";

import { THEME } from "../../themes";

import { styles } from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

interface Props extends TouchableOpacityProps {
  data: Aula;
  valueModal: any;
  sendsId: any;
}
export function InicioCard({ data, valueModal, sendsId}: Props) {
  const [showModal, setShowModal] = useState(false);

  function validModal(id) {
    if (showModal == true) {
      valueModal(false);
    } else {
      sendsId(id)
      valueModal(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleEnvironment}>
        <Text
          style={{
            fontFamily: THEME.FONT_FAMILY.BOLD,
            fontSize: THEME.FONT_SIZE.LG,
            color: THEME.COLORS.AZUL_500,
          }}
        >
          {data.ambiente.nome}
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.containerHeaderLeft}>
            <Text style={styles.textSubTitleHeader}>Periodo</Text>
          </View>
          <View style={styles.containerHeaderRight}>
            <Text style={styles.textSubTitleHeader}>Aula</Text>
          </View>
          <View style={styles.containerHeaderRight}>
            <Text style={styles.textSubTitleHeader}>Professor</Text>
          </View>
        </View>
        <View style={styles.containerPeriods}>
          <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(data.id)}>
            {/* Manha */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="sunny" size={30} color={'#F2CB05'} />
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "MANHA" ? (
                <Text numberOfLines={1} style={styles.textClass}>{data.unidadeCurricular.nome}</Text>
              ) : (
                <Text style={styles.textAvailableClass}>Ambiente</Text>
              )}
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "MANHA" ? (
                <Text numberOfLines={1} style={styles.textClass}>{data.professor.nome}</Text>
              ) : (
                <Text style={styles.textAvailableClass}>Disponível</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(data.id)}>
            {/* Tarde */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="partly-sunny" size={30} color={'#A6A6A6'} />
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "TARDE" ? (
                <Text style={styles.textClass} numberOfLines={1}>{data.unidadeCurricular.nome}</Text>
              ) : (
                <Text style={styles.textAvailableClass}>Ambiente</Text>
              )}
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "TARDE" ? (
                <Text style={styles.textClass} numberOfLines={1}>{data.professor.nome}</Text>
              ) : (
                <Text style={styles.textAvailableClass}>Disponível</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(data.id)}>
            {/* Noite */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="moon" size={30} color={'#11233E'} />
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "NOITE" ? (
                <Text numberOfLines={1} style={styles.textClass}>{data.unidadeCurricular.nome}</Text>
              ) : (
                <Text style={styles.textAvailableClass}>Ambiente</Text>
              )}
            </View>
            <View style={styles.containerPeriodRight}>
              {data.periodo === "NOITE" ? (
                <Text numberOfLines={1} style={styles.textClass}>{data.professor.nome}</Text>
              ) : (
                <Text  style={styles.textAvailableClass}>Disponível</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
