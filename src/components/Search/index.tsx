import React, { useState } from "react";
import { View, Text, Pressable, Keyboard } from "react-native";

import { styles } from "./styles";

import IconSearch from "../../assets/icon_search.png";
import { TextInput } from "react-native-paper";
interface SearchProps {
  placeholder: string;
  aplicSearch: any;
  receiveSearch: any;

}

export function Search({ placeholder, aplicSearch, receiveSearch }: SearchProps) {

  
  return (
    <View>
      {/* <Text>{receiveText}</Text> */}
      <TextInput
        style={styles.main}
        editable
        placeholderTextColor={"#3F3C3C"}
        placeholder={placeholder}
        selectionColor={"#000"}
        activeUnderlineColor={"transparent"}
        mode={"flat"}
        underlineColor={"transparent"}
        onChangeText={text => receiveSearch(text)}
        onChange={aplicSearch}
        // onChange={}
      />
    </View>
  );
}
