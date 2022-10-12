import React, { useState } from "react";
import { View, Text, Pressable, Keyboard,TouchableOpacity,Platform } from "react-native";

import { styles } from "./styles";

import { TextInput } from "react-native-paper";
interface SearchProps {
  placeholder: string;
  aplicSearch: any;
  receiveSearch: any;
  clenSearch: any;

}

export function Search({ placeholder, aplicSearch, receiveSearch, clenSearch }: SearchProps) {


  return (
    <View>
      <TextInput
        style={Platform.OS === 'ios' ? styles.mainIOS : styles.mainANDROID}
        editable
        placeholderTextColor={"#3F3C3C"}
        placeholder={placeholder}
        selectionColor={"#000"}
        activeUnderlineColor={"transparent"}
        mode={"flat"}
        underlineColor={"transparent"}
        onChangeText={text => receiveSearch(text)}
        onChange={aplicSearch}
        value={clenSearch}
              
      />
    </View>
  );
}
