import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { Ambientes } from "../../screens/Environments";

import { styles } from "./styles";

import IconCurso from "../../assets/icon_curso.png";

interface Props extends TouchableOpacityProps {
  data: Ambientes;
}
export function AmbienteCard({ data, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <TouchableOpacity style={styles.content}>
        <View style={styles.contentTexts}>
          <Text style={styles.txtName}>{data.nome}</Text>
          <View>
            <Text>Capacidade: {data.capacidade}</Text>
            <Text>Complemento: {data.complemento}</Text>
            <Text>Tipo de Ambiente: {data.tipoAmbiente}</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.status}>
            <Text style={styles.txtType}>Livre</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
