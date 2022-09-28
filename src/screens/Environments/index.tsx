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

import Icon from "../../assets/icon_curso.png";

import { AmbienteCard } from "../../components/AmbienteCard";
import { Background } from "../../components/Background";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { AMBIENTES } from "../../utils/ambientes";
import { LISTA_AMBIENTES } from "../../utils/listAmbientes";

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
  const [showModal, setShowModal] = useState(false);
  const [ambientes, setAmbientes] = useState<Ambientes[]>([]);

  async function getAmbientesDidMount() {
    const response = await API.get("/api/ambiente");
    setAmbientes(response.data);
  }

  useEffect(() =>{
    getAmbientesDidMount()
  },[])

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
                  <TextInput
                    style={styles.input}
                    placeholder="Selecione um ambiente"
                  />
                  <TouchableOpacity style={styles.containerImg}>
                    <Image source={Icon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentFilter}>
                  <TextInput
                    style={styles.input}
                    placeholder="Selecione um periodo"
                  />
                  <TouchableOpacity style={styles.containerImg}>
                    <Image source={Icon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentFilter}>
                  <TextInput
                    style={styles.input}
                    placeholder="Data inicio..."
                  />
                  <TouchableOpacity style={styles.containerImg}>
                    <Image source={Icon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.contentFilter}>
                  <TextInput style={styles.input} placeholder="Data final..." />
                  <TouchableOpacity style={styles.containerImg}>
                    <Image source={Icon} />
                  </TouchableOpacity>
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
