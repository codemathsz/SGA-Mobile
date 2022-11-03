import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";
import { Ambientes } from "../../screens/Environments";

import { styles } from "./styles";

interface Props {
  data: Ambientes;
  onPressEnvironment: any;
  valueEnvironment: any;
  validStyle: any;
}

export function EnvironmentsOptionsCard({
  data,
  onPressEnvironment,
  valueEnvironment,
  validStyle,
}: Props) {
  // aplicar o style conforme o valor
  const [environmentSelect, setEnvironmentSelect] = useState(false);
  // recebendo o valor para validação
  const [value, setValue] = useState(null);

  function receiveSelected(data) {
    setValue(data.id);
    onPressEnvironment(data.nome);
    valueEnvironment(data.id);
    validFunction();
  }

  const validFunction = () => {
    if (validStyle === value) {
      setEnvironmentSelect(true);
    } else {
      setEnvironmentSelect(false);
    }
  };

  // fazendo a validação todas vez que o componente for
  // renderizado e toda vez que o valor da
  //validStyle mudar
  useEffect(() => {
    validFunction();
  }, [validStyle]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          environmentSelect == true
            ? styles.containerInfoSelect
            : styles.containerInfo
        }
        onPress={() => receiveSelected(data)}
      >
        <Text
          style={environmentSelect == true ? styles.textSelect : styles.text}
          
        >
          {data.nome}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
