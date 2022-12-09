import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
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
    complemento: string;
    endereco: string;
  };
  professor: {
    id: number;
    nome: string;
    email: string;
    cargaSemanal: number;
    ativo: boolean;
    competencia: [
      {
        id: number;
        unidadeCurricular: {
          id: number;
          nome: string;
          horas: number;
        };
        nivel: number;
      }
    ];
  };
  cargaDiaria: number;
  data: string;
  unidadeCurricular: {
    id: number;
    nome: string;
    horas: number;
  };
  codTurma: string;
  periodo: string;
}

export function ModalHome({ valueShowModal, idClass }) {
  const [dataClass, setDataClass] = useState<AulaModal[]>([]);

  async function getClassesDidMount() {
    try {
      const response = await API.get(`/api/aula/busca/${idClass}`);
      if (response != null) {
        setDataClass(response.data);
      }else{
        console.log('Erro ao trazer os dados da aula');
        
      }
    } catch (error) {
      console.error(`Erro ao receber a aula clicada para a modal ${error}`);
    }
  }

  useEffect(() => {
    getClassesDidMount();
  }, []);

  console.log("id recebido ==> " + idClass);
  console.log(`DADOS DA AULA ${dataClass[0]?.unidadeCurricular?.nome}`);
  
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
        <View style={styles.containerInfo}>
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
            <Text style={{ color: "#000" }}>{dataClass[0]?.professor?.nome}</Text>
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
