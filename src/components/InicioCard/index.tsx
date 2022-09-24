import React from "react";
import { View, TouchableOpacityProps, Text } from "react-native";

import { THEME } from "../../themes";

import { styles } from "./styles";

export interface InicioCardProps {
  id: string;
  ambiente: string;
  curso: string;
  professor: string;
  periodo: string;
}

interface Props extends TouchableOpacityProps {
  data: InicioCardProps;
}
export function InicioCard({ data, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={{fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE}}>{data.ambiente}</Text>
          <Text style={{fontFamily: THEME.FONT_FAMILY.BOLD, fontSize: THEME.FONT_SIZE.MD, color: THEME.COLORS.WHITE}}>Professor</Text>
        </View>
        <View style={styles.containerManha}>
          <View>
            <Text>{data.curso}</Text>
          </View>
          <View>
            <Text>{data.professor}</Text>
          </View>
        </View>
        <View style={styles.containerTarde}>
          <View>
            <Text>{data.curso}</Text>
          </View>
          <View>
            <Text>{data.professor}</Text>
          </View>
        </View>
        <View style={styles.containerNoite}>
          <View>
            <Text>{data.curso}</Text>
          </View>
          <View>
            <Text>{data.professor}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
