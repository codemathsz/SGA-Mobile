import React from "react";
import {
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";

import { Teachers } from "../../screens/Teachers";

interface Props {
  data: Teachers;
}

export function TeachersOptionsCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerInfo}>
        <Text style={styles.text}>{data.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
