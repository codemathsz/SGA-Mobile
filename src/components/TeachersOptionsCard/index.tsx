import React, { useEffect, useState } from "react";
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
  valueTeacher: any;
  validStyle: any;
}

function selectedTeacher() {}

export function TeachersOptionsCard({
  data,
  onPressTeacher,
  valueTeacher,
  validStyle,
}: Props) {
  const [teacherSelect, setTeacherSelect] = useState(false);
  const [value, setValue] = useState(null);

  function receiveSelected(data) {
    setValue(data.id)
    onPressTeacher(data.nome);
    valueTeacher(data.id);
    validFunction();
  }

  const validFunction = () => {
    if (validStyle === value) {
      setTeacherSelect(true);
    } else{
      setTeacherSelect(false);
    }
  };

  useEffect(() => {
    validFunction()
  }, [validStyle])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          teacherSelect == true
            ? styles.containerInfoSelect
            : styles.containerInfo
        }
        onPress={() => receiveSelected(data)}
      >
        <Text style={styles.text}>{data.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}
