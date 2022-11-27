import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { Aula } from "../../screens/Home";
import API from "../../services/api";

import { styles } from "./styles";

interface Props {
  idClass;
}

export function ModalHome({ valueShowModal, idClass }) {
  const [dataClass, setDataClass] = useState<Aula[]>([]);

  async function getClassesDidMount() {
    try {
      dataClass.splice(0);
      const response = await API.get(`/api/aula/busca/${idClass}`);
      setDataClass(response.data);
    } catch (error) {
      console.error(`Erro ao receber a aula clicada para a modal ${error}`);
    }
  }

  useEffect(() => {
    getClassesDidMount();
  }, []);

  return (
    <View style={styles.contentModal}>
      <View style={styles.modal}>
        <View style={styles.headerModal}>
          <View>
            <Text style={styles.titleHeaderModal}>Informações da Aula</Text>
          </View>
          <TouchableOpacity onPress={() => valueShowModal(false)}>
            <Text style={styles.closeModal}>X</Text>
          </TouchableOpacity>
        </View>
        <View >
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Ambiente:</Text>
            <Text style={styles.textEnviroment}>
              {dataClass[0]?.ambiente?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Aula: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass[0]?.unidadeCurricular?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Carga Horária UC: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass[0]?.unidadeCurricular?.horas} horas
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Carga Diaria: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass[0]?.cargaDiaria} horas
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Professor(a): </Text>
            <Text style={{ color: "#000" }}>
              {dataClass[0]?.professor?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Período: </Text>
            <Text style={{ color: "#000" }}>{dataClass[0]?.periodo}</Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Código da Turma: </Text>
            <Text style={{ color: "#000" }}>{dataClass[0]?.codTurma}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
