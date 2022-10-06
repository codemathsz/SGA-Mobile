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
  //
  const [typeSearchAmbiente, setTypeSearchAmbiente] = useState<Ambientes[]>([]);
  //
  const [capacitySearchAmbiente, setCapacitySearchAmbiente] = useState<Ambientes[]>([]);
  // useStates para select ambiente
  const [typeAmbiente, setTypeAmbiente] = useState([])
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
  // variavel para guardar o array da capacidade ambiente, separada
  const [primaryValueCapacity, setPrimaryValueCapacity] = useState([])
  // variavel para guardar o array da capacidade ambiente, separada
  const [secondValueCapacity, setSecondValueCapacity] = useState([])

  // useState para identificar uma filtragem
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);

  // para guarda o texto que o usuário está buscando
  const [textSearch, setTextSearch] = useState();

  // text input
  const [searchEnvironment, setSearchEnvironment] = useState<Ambientes[]>([]);

    // value do Search para ser limpado
    const [valueSearch, setValueSearch] = useState()

  async function getAmbientesDidMount() {
    const response = await API.get("/api/ambiente");
    setAmbientes(response.data);
  }

  async function getTypeAmbientesDidMount() {
    const response = await API.get("/api/ambiente/tipoambiente");
    setTypeAmbiente(response.data);
  }

  async function getFilterTypeEnvironmentsDidMount() {
    const response = await API.get("/api/ambiente/buscaambiente/" + selectTypeAmbient);

    typeSearchAmbiente.splice(0)
    setTypeSearchAmbiente(response.data);
  }


  async function getFilterCapacityDidMount() {
    console.log("valor 1: "+primaryValueCapacity)
    console.log("valor 2: "+secondValueCapacity)

    const response = await API.get(`/api/ambiente/capacidade?capacidadeMin=${primaryValueCapacity}&capacidadeMax=${secondValueCapacity}`)

    setCapacitySearchAmbiente(response.data)
  }

  async function getSearchEnvironmentsDidMount() {
    const response = await API.get(
      '/api/ambiente/buscapalavra/' + textSearch
    )

    searchEnvironment.splice(0)
    setSearchEnvironment(response.data)
  }


  useEffect(() => {
    getAmbientesDidMount();
    getTypeAmbientesDidMount();
    getFilterTypeEnvironmentsDidMount()
  }, []);


  // função para aplicar o filtro
  function filterAplic() {
    setFilter(true);
    setSearch(false);
    setValueSearch(null)
  }

  const searchAplic = () => {
    setSearch(true);
    setFilter(false)
  }

  function onPressFilter() {
    setShowModal(false)
    getFilterTypeEnvironmentsDidMount()
    filterAplic()
    separateArray()
  }

  // função para aplicar o search
  const searchReceive = (textValue) => {
    setTextSearch(textValue);

    // pegar o valor e colocar no value, 
    // para depois poder anular ele em qualquer momento
    setValueSearch(textValue);

    getSearchEnvironmentsDidMount()
  }

    // deixando a texInput de buscar vazio
    const clearSearch = () => {
      setValueSearch(textSearch);
      setValueSearch(null)
    }
  

  // valida se está sendo feita uma busca ou um filtro
  const validateCloseSearch = () => {
    if (search === true) {
      setSearch(false);
    } else {
      setFilter(false)
    }
  }

  function separateArray() {
    setPrimaryValueCapacity(selectCapacidadeAmbient.slice(0, 2))
    setSecondValueCapacity(selectCapacidadeAmbient.slice(3))
    getFilterCapacityDidMount()
  }


  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Background>
        <Header title="Ambientes" subTitle="Consulte os ambientes" />
        <View style={styles.containerSearch}>
          <Search placeholder="Buscar ambientes" aplicSearch={searchAplic} receiveSearch={searchReceive} clenSearch={valueSearch} />
          <TouchableOpacity
            style={styles.btnModal}
            onPress={() => setShowModal(true)}
          >
            <Filter />
          </TouchableOpacity>
        </View>
        {
          filter == true ?
            (
              selectTypeAmbient != 'default' ?
                <FlatList

                  ListHeaderComponent={
                    <ConfigApplicator
                      text="Filtro Aplicado"
                      functionFilter={validateCloseSearch}
                    />
                  }

                  data={typeSearchAmbiente}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <AmbienteCard data={item} />}
                  horizontal={false}
                  showsVerticalScrollIndicator
                  style={styles.list}
                ></FlatList>
                :
                  <FlatList

                    ListHeaderComponent={
                      <ConfigApplicator
                        text="Filtro Aplicado"
                        functionFilter={validateCloseSearch}
                      />
                    }

                    data={capacitySearchAmbiente}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <AmbienteCard data={item} />}
                    horizontal={false}
                    showsVerticalScrollIndicator
                    style={styles.list}
                  ></FlatList>
                 
            )
            :
            (
              <FlatList
                data={ambientes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <AmbienteCard data={item} />}
                horizontal={false}
                showsVerticalScrollIndicator
                style={styles.list}
              ></FlatList>
            )
        }
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
                    <Picker.Item label="Selecione um tipo de Ambiente" value={'default'} color="#00000090" />
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
                onPress={() => onPressFilter()}
              >
                <Text style={styles.txtButton}>Buscar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          ""
        )
        }
      </Background>
    </Pressable>
  );

}