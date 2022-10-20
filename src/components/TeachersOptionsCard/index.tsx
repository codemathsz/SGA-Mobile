import React, { useState } from "react";
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
  onPressTeacher: any;
}

function selectedTeacher() {}

export function TeachersOptionsCard({ data, onPressTeacher }: Props) {
  const [teacherSelect, setTeacherSelect] = useState(false);

  function receiveSelected(nome) {
    onPressTeacher(nome);

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerInfo}
        onPress={() => receiveSelected(data.nome)}
      >
        <Text style={styles.text}>{data.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
