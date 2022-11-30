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
    <Text>
      hi
    </Text>
  );
}
