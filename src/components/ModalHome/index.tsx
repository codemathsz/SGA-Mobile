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

interface AulaModal {
  id: number;
  ambiente: {
    id: number;
    nome: string;
    capacidade: number;
    tipo: string;
    ativo: boolean;
    cep: string;
    complemento: string
    endereco: string;
  }
  professor: {
    id: number;
    nome: string;
    email: string
    cargaSemanal: number;
    ativo: boolean
    competencia: [
      {
        id: number;
        unidadeCurricular: {
          id: number;
          nome: string;
          horas: number;
        }
        nivel: number
      }
    ]
  }
  cargaDiaria: number;
  data: string;
  unidadeCurricular: {
    id: number;
    nome: string;
    horas: number
  }
  codTurma: string;
  periodo: string;
}

export function ModalHome({ valueShowModal, idClass }) {
  const [dataClass, setDataClass] = useState<AulaModal>();

  async function getClassesDidMount() {
    try {

      const response = await API.get(`/api/aula/busca/${idClass}`);
      setDataClass(response.data);
    } catch (error) {
      console.error(`Erro ao receber a aula clicada para a modal ${error}`);
    }
  }

  useEffect(() => {
    getClassesDidMount();
  }, []);

  console.log("id enviado ==> "+idClass);
  

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
              {dataClass?.ambiente?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Aula: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass?.unidadeCurricular?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Carga Horária UC: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass?.unidadeCurricular?.horas} horas
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Carga Diaria: </Text>
            <Text style={{ color: "#000" }}>
              {dataClass?.cargaDiaria} horas
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Professor(a): </Text>
            <Text style={{ color: "#000" }}>
              {dataClass?.professor?.nome}
            </Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Período: </Text>
            <Text style={{ color: "#000" }}>{dataClass?.periodo}</Text>
          </View>
          <View style={styles.contentInfosModal}>
            <Text style={styles.titleInfoLesson}>Código da Turma: </Text>
            <Text style={{ color: "#000" }}>{dataClass?.codTurma}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
