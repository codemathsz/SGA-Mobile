import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function AdvancedSearch() {
  // const para o select da competência
  const [selectedCompetence, setSelectedCompetence] = useState([]);
  // const para RadioButton
  const [localeClasses, setLocaleClasses] = useState("senai");

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
                  <Picker.Item
                    label="Selecione a Competência"
                    value="none"
                    style={styles.itemSelect}
                  />
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
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Onde será o treinamento ?</Text>
              <View style={styles.containerRadio}>
                <View style={styles.divRadio}>
                  <RadioButton
                    value="senai"
                    color="black"
                    status={localeClasses === "senai" ? "checked" : "unchecked"}
                    onPress={() => setLocaleClasses("senai")}
                  />
                  <Text>Senai</Text>
                </View>
                <View style={styles.divRadio}>
                  <RadioButton
                    value="company"
                    color="black"
                    status={
                      localeClasses === "company" ? "checked" : "unchecked"
                    }
                    onPress={() => setLocaleClasses("company")}
                  />
                  <Text>Empresa</Text>
                </View>
              </View>
            </View>
            {localeClasses === "company" ? (
              <View style={styles.divForm}>
                <Text style={styles.titleForm}>CEP</Text>
                <TextInput
                  style={styles.inputForm}
                  placeholder="Digite o cep do local da empresa"
                />
              </View>
            ) : (
              ""
            )}
            <View></View>
          </View>
        </ScrollView>
      </View>
    </Background>
  );
}
