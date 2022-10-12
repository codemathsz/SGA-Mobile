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
  Platform,
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
import { ConfigApplicator } from "../../components/ConfigApplicator";

export interface Ambientes {
  id: string;
  nome: string;
  capacidade: string;
  tipoAmbiente: string;
  cep: string;
  complemento: string;
  ativo: boolean;
}

export function Environments({ id, ...rest }: Ambientes) {
  // useStates para modal
  const [showModal, setShowModal] = useState(false);
  // useState para consumir dados de ambientes
  const [ambientes, setAmbientes] = useState<Ambientes[]>([]);
  // para guardar a busca do ambiente pelo tipo
  const [typeSearchAmbiente, setTypeSearchAmbiente] = useState<Ambientes[]>([]);
  // para guardar a busca do ambiente pela capacidade
  const [capacitySearchAmbiente, setCapacitySearchAmbiente] = useState<
    Ambientes[]
  >([]);
  // para guardar a busca do filtro combinando tipo e capacidade
  const [environmentTypeAndCapacity, setEnvironmentTypeAndCapacity] = useState<
    Ambientes[]
  >([]);
  // useStates para select ambiente
  const [typeAmbiente, setTypeAmbiente] = useState([]);
  // tipo de ambiente selecionado no select
  const [selectTypeAmbient, setSelectTypeAmbient] = useState();
  // valor para os picker.item
  const [capacidadeAmbient, setCapacidadeAmbient] = useState([
    "Selecione a capacidade do Ambiente",
    "10-15",
    "20-25",
    "25-30",
    "30+",
  ]);
  // valor do select da capacidade do ambiente
  const [selectCapacidadeAmbient, setSelectCapacidadeAmbient] = useState([]);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);

  // text input
  const [searchEnvironment, setSearchEnvironment] = useState<Ambientes[]>([]);
  // value do Search para ser limpado
  const [valueSearch, setValueSearch] = useState();

  // APIs

  // buscar todos os ambiente
  async function getAmbientesDidMount() {
    try {
      const response = await API.get("/api/ambiente");
      setAmbientes(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // trazer todos os tipos de ambiente para alimentar o picker
  async function getTypeAmbientesDidMount() {
    try {
      const response = await API.get("/api/ambiente/tipoambiente");
      setTypeAmbiente(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // filtro para buscar ambientes pela a tipo de ambiente selecionada no picker
  async function getFilterTypeEnvironmentsDidMount() {
    try {
      const response = await API.get(
        "/api/ambiente/buscaambiente/" + selectTypeAmbient
      );

      typeSearchAmbiente.splice(0);
      setTypeSearchAmbiente(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // filtro para buscar ambientes pela a capacidade selecionada no picker
  const getFilterCapacityDidMount = async () => {
    let capacityPositionInitial = [capacidadeAmbient[0]];
    let capacityPositionFinal = [capacidadeAmbient[4]];

    if (selectCapacidadeAmbient == capacityPositionInitial) {
      console.log("filtro não selecionado ");
    } else if (selectCapacidadeAmbient == capacityPositionFinal) {
      console.log(
        "filtro +30 " + " posição 1 :" + selectCapacidadeAmbient.slice(0, 2)
      );
      const response = await API.get(
        `/api/ambiente/capacidade?capacidadeMin=${selectCapacidadeAmbient.slice(
          0,
          2
        )}&capacidadeMax=${100}`
      );
      setCapacitySearchAmbiente(response.data);
    } else {
      const response = await API.get(
        `/api/ambiente/capacidade?capacidadeMin=${selectCapacidadeAmbient.slice(
          0,
          2
        )}&capacidadeMax=${selectCapacidadeAmbient.slice(3)}`
      );
      setCapacitySearchAmbiente(response.data);
    }
  };

  // busca por palavra chave, TextInput
  async function getSearchEnvironmentsDidMount(textValue) {
    try {
      // para que o value nunca seja vazio
      setValueSearch(textValue);

      const response = await API.get("/api/ambiente/buscapalavra/" + textValue);

      searchEnvironment.splice(0);
      setSearchEnvironment(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // para o picker, busca ambiente pela tipo e capacidade
  async function getTypeAndCapacityDidMount() {
    try {
      const response = await API.get(
        `/api/ambiente/tipoecapacidade?tipoAmbiente=${selectTypeAmbient}&capacidadeMin=${selectCapacidadeAmbient.slice(
          0,
          2
        )}&capacidadeMax=${selectCapacidadeAmbient.slice(3)}`
      );
      setEnvironmentTypeAndCapacity(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // fazer requisição das APIs
  useEffect(() => {
    getAmbientesDidMount();
    getTypeAmbientesDidMount();
    getFilterTypeEnvironmentsDidMount();
  }, []);

  // função para aplicar o filtro
  function filterAplic() {
    setFilter(true);
    setSearch(false);
    clearSearch();
  }

  const searchAplic = () => {
    setSearch(true);
    setFilter(false);
  };

  function onPressFilter() {
    setShowModal(false);
    filterAplic();
    getFilterTypeEnvironmentsDidMount();
    getFilterCapacityDidMount();
    getTypeAndCapacityDidMount();
  }

  // função para aplicar o search
  const searchReceive = (textValue) => {
    // pegar o valor e colocar no value,
    // para depois poder anular ele em qualquer momento
    setValueSearch(textValue);
    getSearchEnvironmentsDidMount(textValue);
  };

  // deixando a texInput de buscar vazio
  const clearSearch = () => {
    setValueSearch(null);
  };

  // valida se está sendo feita uma busca ou um filtro
  const validateCloseSearch = () => {
    if (search === true) {
      setSearch(false);
      clearSearch();
    } else {
      setFilter(false);
      clearSearch();
    }
  };

  const getFilters = () => {
    let capacityPositionInitial = [capacidadeAmbient[0]];

    if (
      selectTypeAmbient != "default" &&
      selectCapacidadeAmbient != capacityPositionInitial
    ) {
      return environmentTypeAndCapacity;
    } else if (selectTypeAmbient != "default") {
      return typeSearchAmbiente;
    } else if (selectCapacidadeAmbient != capacityPositionInitial) {
      return capacitySearchAmbiente;
    }
  };

  console.log(selectCapacidadeAmbient[0]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Background>
        <Header title="Ambientes" subTitle="Consulte os ambientes" />
        <View style={styles.containerSearch}>
          <Search
            placeholder="Buscar ambientes"
            aplicSearch={searchAplic}
            receiveSearch={searchReceive}
            clenSearch={valueSearch}
          />
          <TouchableOpacity
            style={Platform.OS === 'ios' ? styles.btnModalIOS : styles.btnModalANDROID}
            onPress={() => setShowModal(true)}
          >
            <Filter />
          </TouchableOpacity>
        </View>
        {filter == true ? (
          <FlatList
            ListHeaderComponent={
              <ConfigApplicator
                text="Filtro Aplicado 1"
                functionFilter={validateCloseSearch}
              />
            }
            data={getFilters()}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <AmbienteCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          ></FlatList>
        ) : search == true ? (
          <FlatList
            ListHeaderComponent={
              <ConfigApplicator
                text="Busca Aplicada"
                functionFilter={validateCloseSearch}
              />
            }
            data={searchEnvironment}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <AmbienteCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          ></FlatList>
        ) : (
          <FlatList
            data={ambientes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <AmbienteCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          ></FlatList>
        )}
        {showModal == true ? (
          <Pressable
            style={styles.background}
            onPress={() => setShowModal(false)}
          >
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => setShowModal(false)}>
                  <Text style={styles.txtClose}>X</Text>
                </TouchableOpacity>
                <View style={styles.vwTitle}>
                  <Text style={styles.title}>Filtragem Ambientes</Text>
                </View>
              </View>
              <View style={styles.containerFilter}>
                <View style={styles.contentFilter}>
                  <Picker
                    selectedValue={selectTypeAmbient}
                    style={Platform.OS === 'ios' ? styles.datePickerIOS :styles.datePickerANDROID}
                    mode={"dropdown"}
                    onValueChange={(itemValue) =>
                      setSelectTypeAmbient(itemValue)
                    }
                  >
                    <Picker.Item
                      label="Selecione um tipo de Ambiente"
                      value={"default"}
                      color="#00000090"
                    />
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
                    style={Platform.OS === 'ios' ? styles.datePickerIOS :styles.datePickerANDROID}
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
                onPress={() => onPressFilter()}
              >
                <Text style={styles.txtButton}>Buscar</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        ) : (
          ""
        )}
      </Background>
    </Pressable>
  );
}
