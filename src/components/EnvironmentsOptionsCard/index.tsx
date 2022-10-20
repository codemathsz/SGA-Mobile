import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Ambientes } from "../../screens/Environments";


import { styles } from "./styles";

interface Props {
  data: Ambientes;
}

export function EnvironmentsOptionsCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerInfo}>
        <Text style={styles.text}>{data.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
