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
  idItem: any;
}
export function InicioCard({ data, valueModal, idItem }: Props) {
  const [showModal, setShowModal] = useState(false);

  function validModal() {
    if (showModal == true) {
      valueModal(false);
    } else {
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
          <TouchableOpacity style={styles.containerPeriod}>
            {/* Manha */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="sunny" size={30} color={THEME.COLORS.AZUL_400} />
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
          <TouchableOpacity style={styles.containerPeriod}>
            {/* Tarde */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="partly-sunny" size={30} color={THEME.COLORS.AZUL_500} />
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
          <TouchableOpacity style={styles.containerPeriod}>
            {/* Noite */}
            <View style={styles.containerPeriodLeft}>
              <Ionicons name="moon" size={30} color={THEME.COLORS.AZUL_600} />
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
