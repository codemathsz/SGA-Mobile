import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "../../assets/icon_curso.png";

import { AmbienteCard } from "../../components/AmbienteCard";
import { Background } from "../../components/Background";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { styles } from "./styles";

import API from "../../services/api";

export interface Ambientes {
  id: string;
  nome: string;
  capacidade: string;
  tipoAmbiente: string;
  cep: string;
  complemento: string;
  ativo: boolean;
}

export function Environments() {
  // useStates para modal
  const [showModal, setShowModal] = useState(false);
  // useState para consumir dados de ambientes
  const [ambientes, setAmbientes] = useState<Ambientes[]>([]);
  // useStates para select ambiente
  const [typeAmbiente, setTypeAmbiente] = useState([])
  const [selectTypeAmbient, setSelectTypeAmbient] = useState();
  const [capacidadeAmbient, setCapacidadeAmbient] = useState([
    "Selecione a capacidade do ambiente",
    "10-15",
    "20-25",
    "25-30",
    "30+",
  ]);
  const [selectCapacidadeAmbient, setSelectCapacidadeAmbient] = useState([]);

  async function getAmbientesDidMount() {
    const response = await API.get("/api/ambiente");
    setAmbientes(response.data);
  }

  async function getTypeAmbientesDidMount() {
    const response = await API.get("/api/ambiente/tipoambiente");
    setTypeAmbiente(response.data);
  }

  useEffect(() => {
    getAmbientesDidMount();
    getTypeAmbientesDidMount();
  }, []);

  console.log(typeAmbiente)

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Background>
        <Header title="Ambientes" subTitle="Consulte os ambientes" />
        <View style={styles.containerSearch}>
          <Search placeholder="Buscar ambientes" />
          <TouchableOpacity
            style={styles.btnModal}
            onPress={() => setShowModal(true)}
          >
            <Filter />
          </TouchableOpacity>
        </View>
        <FlatList
          data={ambientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <AmbienteCard data={item} />}
          horizontal={false}
          showsVerticalScrollIndicator
          style={styles.list}
        ></FlatList>
        {showModal == true ? (
          <View style={styles.background}>
            <View style={styles.modal}>
              <View style={styles.vwTitle}>
                <Text style={styles.title}>Filtragem Ambiente</Text>
              </View>
              <View style={styles.containerFilter}>
                <View style={styles.contentFilter}>
                  <Picker
                    selectedValue={selectTypeAmbient}
                    style={styles.datePicker}
                    mode={"dropdown"}
                    onValueChange={(itemValue) =>
                      setSelectTypeAmbient(itemValue)
                    }
                  >
                    {typeAmbiente.map((cr) => {
                      return (
                        <Picker.Item
                          label={cr}
                          value={cr}
                          style={styles.itemDatePicker}
                        />
                      );
                    })}
                  </Picker>
                </View>
                <View style={styles.contentFilter}>
                  <Picker
                    selectedValue={selectCapacidadeAmbient}
                    style={styles.datePicker}
                    mode={"dropdown"}
                    onValueChange={(itemValue) =>
                      setSelectCapacidadeAmbient(itemValue)
                    }
                  >
                    {capacidadeAmbient.map((cr) => {
                      return (
                        <Picker.Item
                          label={cr}
                          value={cr}
                          style={styles.itemDatePicker}
                        />
                      );
                    })}
                  </Picker>
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.txtButton}>Buscar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          ""
        )}
      </Background>
    </Pressable>
  );
}
