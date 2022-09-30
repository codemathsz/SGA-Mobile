import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { Courses } from "../../screens/Courses";
import IconDone from "../../assets/check.png"

import { styles } from "./styles";

interface Props {
  text: string;
  functionFilter: any;
}

export function ConfigApplicator({ text, functionFilter }: Props) {



  return (
    <View style={styles.container}>
      <View style={styles.containerDone}>
        <Image
          source={IconDone}
          style={{width: 16, height: 16}}
        />
        <Text style={styles.text}>{text}</Text>
      </View>

      <TouchableOpacity style={styles.touchableOpacity} onPress={functionFilter}>
        <Text style={styles.textBtn}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}
