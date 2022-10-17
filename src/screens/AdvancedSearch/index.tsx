import { Picker, PickerIOS } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AdvancedSearch() {
  // const para o select da competência
  const [selectedCompetence, setSelectedCompetence] = useState([]);

  return (
    <Background>
      <Header
        title="Busca Avançada"
        subTitle="Solicite a disponibilidade de um Professor e um Ambiente"
      />

      <View>
        <ScrollView>
          <View style={styles.containerForm}>
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Curso</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="Digite o nome do Curso"
              />
            </View>
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Competência</Text>
              <View style={styles.selectForm}>
                <Picker
                  selectedValue={selectedCompetence}
                  onValueChange={(itemValue) =>
                    setSelectedCompetence(itemValue)
                  }
                  mode={"dropdown"}
                >
                  <Picker.Item label="Selecione a Competência" value="none" style={styles.itemSelect}/>
                </Picker>
              </View>
            </View>
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Empresa</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="Digite o nome da Empresa"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}
