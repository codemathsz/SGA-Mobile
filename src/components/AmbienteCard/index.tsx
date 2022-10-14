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
        <View style={styles.contentText}>
          <Text style={styles.txtName}>{data.nome}</Text>
          <View>
            <Text style={styles.texts}>Capacidade: {data.capacidade}</Text>
            <Text style={styles.texts}>Complemento: {data.complemento}</Text>
            <Text style={styles.texts}>Tipo de Ambiente: {data.tipoAmbiente}</Text>
          </View>
        </View>

        <View style={{width:'28%', position: 'absolute', top: 10, right: 8, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.status}>
            <Text style={styles.txtType}>Livre</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
