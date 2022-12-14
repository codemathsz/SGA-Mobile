import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Pressable,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
  ActionSheetIOS,
} from "react-native";
import { TextInput } from "react-native-paper";

import { Background } from "../../components/Background";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { ProfessoresCard } from "../../components/ProfessoresCard";
import { Search } from "../../components/Search";

import { Picker } from "@react-native-picker/picker";

import Icon from "../../assets/icon_curso.png";

import { styles } from "./styles";

import API from "../../services/api";
import { ConfigApplicator } from "../../components/ConfigApplicator";
import { Loading } from "../../components/Loading";

export interface Teachers {
  id: string;
  nome: string;
  cargaSemanal: string;
  competencia: [];
  ativo: boolean;
  email: string;
  foto: string;
}

export interface Course {
  id: string;
  nome: string;
  tipoCurso: string;
  ativo: string;
  unidadeCurricular: [];
}

export interface CurricularUnit {
  id: string;
  nome: string;
  cargaHoraria: string;
}

export function Teachers() {
  // para modal
  const [showModal, setShowModal] = useState(false);
  // para saber se está sendo aplicada uma filtragem...
  const [filter, setFilter] = useState(false);
  // para saber se está sendo aplicada uma busca...
  const [search, setSearch] = useState(false);
  // array para guardar a busca da API de professor
  const [teachersSearch, setTeachersSearch] = useState<Teachers[]>([]);
  // value do Search para ser limpado
  const [valueSearch, setValueSearch] = useState();
  // receber o get de professor
  const [professor, setProfessor] = useState<Teachers[]>([]);
  // unidade curricular para colocar no select
  const [curricularUnit, setCurricularUnit] = useState<CurricularUnit[]>([]);
  const [curricularUnitIos, setCurricularUnitIos] = useState([]);
  // para guardar o que foi selecionado no select unid. curricular
  const [selectCurricularUnit, setSelectCurricularUnit] = useState([]);
  const [selectCurricularUnitIos, setSelectCurricularUnitIos] = useState('Selecione uma Unidade Curricular')
  // Arrays para as filtragens
  const [filterUnityCurses, setFilterUnityCurses] = useState<Teachers[]>([]);

  // Recebe os professores
  async function getProfessorDidMount() {
    try {
      const response = await API.get("/api/professor");
      setProfessor(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Recebe as Unidades Curriculares
  async function getCurricularUnitDidMount() {
    try {
      const response = await API.get("/api/unidade");
      setCurricularUnit(response.data);
      setCurricularUnitIos(response.data.nome)
    } catch (error) {
      console.log(error);
    }
  }

  // Recebe Professores conforme a busca
  async function getTeachersSearchDidMount(textValue) {
    try {
      // colocando no value do search para que ele nuca seja vazio
      setValueSearch(textValue);
      // recebendo api
      const response = await API.get(
        `/api/professor/buscapalavra/${textValue}`
      );
      // deixando a Array vazia para não entrar em conflito com novos valores
      teachersSearch.splice(0);
      setTeachersSearch(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUnidadeSearchTeachers(){

    const response = await API.get(`api/professor/buscProf?nomeUnidade=${Platform.OS=='android'?selectCurricularUnit:selectCurricularUnitIos}`) 
    setFilterUnityCurses(response.data);
  }

  // Aciona o método de receber Professores, Cursos e Unidade Curricular
  useEffect(() => {
    getProfessorDidMount();
    getCurricularUnitDidMount();
  }, []);

  // função para aplicar o filtro
  function filterAplic() {
    setFilter(true);
    setSearch(false);
    setValueSearch(null);
    getUnidadeSearchTeachers();
  }

  // Aplicando a busca e removendo o filtro
  const searchAplic = () => {
    setSearch(true);
    setFilter(false);
  };

  // função para aplicar o search
  const searchReceive = (textValue) => {
    setValueSearch(textValue);
    getTeachersSearchDidMount(textValue);
  };

  function onPressFilter() {
    setShowModal(false);
    filterAplic();
  }

  // deixando a texInput de buscar vazio
  const clearSearch = () => {
    setValueSearch(null);
  };

  // valida se está sendo feita uma busca ou um filtro, para colocar no componente de remover
  const validateCloseSearch = () => {
    if (search === true) {
      setSearch(false);
      clearSearch();
    } else {
      setFilter(false);
      clearSearch();
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Background>
        <Header title="Professores" subTitle="Consulte os professores" />
        <View style={styles.containerSearch}>
          <Search
            placeholder="Busca professor"
            aplicSearch={searchAplic}
            receiveSearch={searchReceive}
            clenSearch={valueSearch}
          />
          <TouchableOpacity
            style={
              Platform.OS === "ios"
                ? styles.btnModalIOS
                : styles.btnModalANDROID
            }
            onPress={() => setShowModal(true)}
          >
            <Filter />
          </TouchableOpacity>
        </View>

        {/* Operador ternário para sabe se está sendo feita uma busca personalizada */}

        {professor.length == 0 ? (
          <Loading />
        ) : filter == true ? (
          <FlatList
            ListHeaderComponent={
              <ConfigApplicator
                text="Filtro Aplicado"
                functionFilter={validateCloseSearch}
              />
            }
            data={filterUnityCurses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProfessoresCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          />
        ) : search == true ? (
          <FlatList
            ListHeaderComponent={
              <ConfigApplicator
                text="Busca Aplicado"
                functionFilter={validateCloseSearch}
              />
            }
            data={teachersSearch}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProfessoresCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          />
        ) : (
          <FlatList
            data={professor}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ProfessoresCard data={item} />}
            horizontal={false}
            showsVerticalScrollIndicator
            style={styles.list}
          />
        )}

        {showModal == true ? (
          <Pressable
            style={styles.background}
            onPress={() => setShowModal(false)}
          >
            <Pressable style={styles.modal} onPress={() => setShowModal(true)}>
              <View style={styles.modalHeader}>
                <TouchableOpacity
                  style={styles.close}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.txtClose}>X</Text>
                </TouchableOpacity>
                <View style={styles.vwTitle}>
                  <Text style={styles.title}>Filtragem Professores</Text>
                </View>
              </View>
              <View style={styles.containerFilter}>
                {Platform.OS == "android" ? (
                  <View style={styles.contentFilter}>
                    <Picker
                      selectedValue={selectCurricularUnit}
                      style={styles.datePickerANDROID}
                      onValueChange={(itemValue) =>
                        setSelectCurricularUnit(itemValue)
                      }
                      mode={"dropdown"}
                    >
                      {curricularUnit?.map((cru) => {
                        return (
                          <Picker.Item
                            key={cru.id}
                            label={cru.nome}
                            value={cru.nome}
                            style={styles.itemDatePicker}
                          />
                        );
                      })}
                    </Picker>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      ActionSheetIOS.showActionSheetWithOptions(
                        {
                          title: "Selecione uma opção",
                          options: ["cancelar", "LIMPAR"].concat(curricularUnitIos),
                          cancelButtonIndex: 0,
                          destructiveButtonIndex: 1,
                          userInterfaceStyle: "dark",
                        },
                        (buttonIndex) => {
                          if (buttonIndex === 0) {
                            // cancel action
                          } else if (buttonIndex === 1) {
                            setSelectCurricularUnitIos(
                              'Selecione uma Unidade Curricular'
                            );
                          } else {
                            setSelectCurricularUnitIos(
                              curricularUnitIos[buttonIndex - 2]
                            );
                          }
                        }
                      )
                    }
                    style={styles.input}
                  >
                    <Text>{selectCurricularUnitIos}</Text>
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onPressFilter()}
              >
                <Text style={styles.txtButton}>Buscar</Text>
              </TouchableOpacity>
            </Pressable>
          </Pressable>
        ) : (
          ""
        )}
      </Background>
    </Pressable>
  );
}
