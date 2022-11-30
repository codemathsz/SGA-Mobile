import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { RadioButton } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";

// definindo a linguagem da biblioteca do calendário em português
LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "jan",
    "fev",
    "mar",
    "abr",
    "maio",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ],
  today: ["Hoje"],
  dayNames: ["Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado"],
  dayNamesShort: ["Dom", "Seg", "Terç", "Qua", "Qui", "Sex", "Sáb"],
};
LocaleConfig.defaultLocale = "pt-br";

import { styles } from "./styles";

import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

import { ViewDay } from "../../components/ViewDay";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Filter } from "../../components/Filter";

import { InicioCard } from "../../components/InicioCard";
import { Loading } from "../../components/Loading";
import API from "../../services/api";
import { THEME } from "../../themes";
import { ModalHome } from "../../components/ModalHome";

export interface Aula {
  id: number;
  cargaDiaria: string;
  codTurma: string;
  data: string;
  periodo: string;
  ambiente: {
    id: number;
    nome: string;
    capacidade: number;
    tipoAmbiente: string;
    cep: string;
    complemento: string;
    ativo: string;
    endereco: string;
  };
  professor: {
    id: number;
    nome: string;
    email: string;
    crgaSemanal: string;
    ativo: string;
    competencia: [];
  };
  unidadeCurricular: {
    id: number;
    nome: string;
    horas: string;
  };
}

export function Home() {
  const [aula, setAula] = useState<Aula[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [idClickClass, setIdClickClass] = useState();
  const [daySelected, setDaySelected] = useState(0);
  const [dayIndicator, setDayIndicator] = useState("");
  const [periodSelected, setPeriodSelected] = useState("all");
  const [valueSearch, setValueSearch] = useState();
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [classesSearch, setClassesSearch] = useState<Aula[]>([]);
  const [dateSelectedFormat, setDateSelectedFormat] = useState("");
  const [aulasDeTalDia, setAulasDeTalDia] = useState([])
  // id aula clicada
  const [dataAulaModal, setDataAulaModal] = useState([]);

  const [environmentFromDataSelected, setEnvironmentFromDataSelected] = useState()

  // listagem de aula na home, por uma data selecionada
  const [listAulaFromDaySelect, setListAulaFromDaySelect] = useState<Aula[]>(
    []
  );

  // loading na flatlist
  const [loading, setLoading] = useState(true);

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = yearCurrent + "-" + monthCurrent + "-" + dayCurrent;
  const dateInitial = dayCurrent + "/" + monthCurrent + "/" + yearCurrent;
  // função para o componente "ViewDay",
  // por Padrão de inicio ele recebe o dia atual para os indicadores
  if (daySelected === 0) {
    var passDay = Number(dayCurrent);
    // passando para o indicador maior
    setDaySelected(passDay);
    // passando para o indicador menor
    setDayIndicator(dateCurrent);
  }

  // Aplicando a busca e removendo o filtro
  const searchAplic = () => {
    setSearch(true);
    setFilter(false);
  };

  const searchReceive = (textValue) => {
    setValueSearch(textValue);
    getSearchClasseDidMount(textValue);
  };

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

  async function getSearchClasseDidMount(textValue) {
    try {
      setValueSearch(textValue);
      const response = await API.get(`/api/aula/filtro/${textValue}`);
      classesSearch.splice(0);
      setClassesSearch(response.data);
    } catch (error) {
      console.log(
        `Erro ao receber a requisição de buscar aula por palavra ${error}`
      );
    }
  }

  async function getAulaFromDaySelected() {
    try {
      const response = await API.get(
        `/api/aula/${dayIndicator == "" ? dateCurrent : dayIndicator}`
      );
      setListAulaFromDaySelect(response.data);
      setLoading(false);
      setAulasDeTalDia(listAulaFromDaySelect)
    } catch (error) {
      return console.log(error);
    }
  }

  useEffect(() => {
    getAulaFromDaySelected();

  }, [dayIndicator]);

  const clickModal = (v) => {
    setShowModal(v);
  };

  const receiveIdClickClass = (id) => {
    setIdClickClass(id);
    setShowModal(true);
  };

  const EmptyListMessage = () => {
    return <Text style={styles.emptyListStyle}>Nenhuma aula encontrada!</Text>;
  };


  function getEnvironmentFromDaySelected (item){
    setEnvironmentFromDataSelected(item)
  }

  console.log("Lista de aulas do dia selecionado  " + aulasDeTalDia);


  return (
    <View>
      <View style={{ height: "100%" }}>
        <ScrollView>
          <Background>
            <Header
              title="Bem Vindo"
              subTitle="Selecione um dia e veja as ocupações dos ambientes"
            />

            <View style={styles.sectionCalendar}>
              <Calendar
                // Para estilização do calendário
                style={{
                  width: "90%",
                  height: "auto",

                  marginHorizontal: 20,
                }}
                theme={{
                  backgroundColor: "#FEFEFE",
                  calendarBackground: "#FEFEFE",
                  textSectionTitleColor: "#1E1E40",
                  textSectionTitleDisabledColor: "rgb(17, 17, 17, 0.2)",
                  selectedDayBackgroundColor: "#25B5E9",
                  selectedDayTextColor: "#ffffff",
                  todayTextColor: "#25B5E9",
                  dayTextColor: "#1E1E40",
                  textDisabledColor: "rgba(17, 17, 17, 0.2)",
                  dotColor: "#fff",
                  selectedDotColor: "#25B5E9",
                  arrowColor: "#1E1E40",
                  disabledArrowColor: "#d9e1e8",
                  monthTextColor: "#1E1E40",
                  indicatorColor: "blue",
                  textDayFontWeight: "300",
                  textMonthFontWeight: "bold",
                  textDayHeaderFontWeight: "bold",
                  textDayFontSize: 16,
                  textMonthFontSize: 20,
                  textDayHeaderFontSize: 15,
                }}
                // config gerais do calendário
                initialDate={dateCurrent}
                minDate={"2022-09-20"}
                enableSwipeMonths={true}
                onDayPress={(day) => {
                  var indicatorDay = day.dateString;
                  var daySelect = day.day;
                  var monthSelect = day.month;
                  var yearSelect = day.year;
                  var dateSelectCurrent = `${daySelect}/${monthSelect}/${yearSelect}`;
                  setDateSelectedFormat(dateSelectCurrent);
                  setDayIndicator(indicatorDay);
                }}
                markedDates={{
                  [dayIndicator]: { selected: true, marked: true },
                }}
              />
            </View>

            <View style={styles.containerSearch}>
              <Search
                placeholder="Pesquisar..."
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
              >
                <Filter />
              </TouchableOpacity>
            </View>

            <View style={styles.containerRadios}>
              <View style={styles.containerRadio}>
                <RadioButton
                  value="all"
                  color="black"
                  status={periodSelected === "all" ? "checked" : "unchecked"}
                  onPress={() => setPeriodSelected("all")}
                />
                <Text style={styles.textRadioOne}>Todos</Text>
              </View>
              <View style={styles.containerRadio}>
                <RadioButton
                  value="morning"
                  color="black"
                  status={
                    periodSelected === "morning" ? "checked" : "unchecked"
                  }
                  onPress={() => setPeriodSelected("morning")}
                />
                <Text style={styles.textRadioTwo}>Manhã</Text>
              </View>
              <View style={styles.containerRadio}>
                <RadioButton
                  value="afternoon"
                  color="black"
                  status={
                    periodSelected === "afternoon" ? "checked" : "unchecked"
                  }
                  onPress={() => setPeriodSelected("afternoon")}
                />
                <Text style={styles.textRadioThree}>Tarde</Text>
              </View>
              <View style={styles.containerRadio}>
                <RadioButton
                  value="night"
                  color="black"
                  status={periodSelected === "night" ? "checked" : "unchecked"}
                  onPress={() => setPeriodSelected("night")}
                />
                <Text style={styles.textRadioFour}>Noite</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.containerLista}>
                <View style={styles.msgDate}>
                  <Text
                    style={{
                      color: THEME.COLORS.SELECT,
                      textTransform: "uppercase",
                    }}
                  >{`Aulas do dia: ${dateSelectedFormat == "" ? dateInitial : dateSelectedFormat
                    }`}</Text>
                </View>
                <View style={{ width: "100%" }}>
                  {loading ? (
                    <Loading />
                  ) : (
                    listAulaFromDaySelect != null ?
                      <View style={styles.containerLessons}>
                        <View style={styles.titleEnvironment}>
                          <Text
                            style={{ 
                              fontFamily: THEME.FONT_FAMILY.BOLD,
                              fontSize: THEME.FONT_SIZE.LG,
                              color: THEME.COLORS.AZUL_500,
                            }}
                          >
                            {environmentFromDataSelected}
                          </Text>
                        </View>

                        <View style={styles.card}>
                          <View style={styles.header}>
                            <View style={styles.containerHeaderLeft}>
                              <Text style={styles.textSubTitleHeader}>Periodo</Text>
                            </View>
                            <View style={styles.containerHeaderRight}>
                              <Text style={styles.textSubTitleHeader}>Aula</Text>
                            </View>
                            <View style={styles.containerHeaderRight}>
                              <Text style={styles.textSubTitleHeader}>Professor</Text>
                            </View>
                          </View>

                          {
                            <FlatList
                              data={listAulaFromDaySelect}
                              keyExtractor={(item) => item.id.toString()}
                              renderItem={({ item }) => (
                                
                                <View style={styles.containerPeriods}>

                                  {
                                    <TouchableOpacity style={styles.containerPeriod} onPress={() => receiveIdClickClass(item.id)}>

                                      {
                                        item.periodo === 'MANHA'  ?
                                          <>
                                            {
                                              getEnvironmentFromDaySelected(item.ambiente.nome)
                                            }
                                            <View style={styles.containerPeriodLeft}>
                                              <Ionicons name="sunny" size={30} color={'#F2CB05'} />
                                            </View>
                                            <View style={styles.containerPeriodRight}>
                                              <Text numberOfLines={1} style={styles.textClass}>{item.unidadeCurricular.nome}</Text>
                                            </View>
                                            <View style={styles.containerPeriodRight}>
                                              <Text numberOfLines={1} style={styles.textClass}>{item.professor.nome}</Text>
                                            </View>
                                          </>
                                          : item.periodo === 'TARDE' ?
                                            <>
                                              <View style={styles.containerPeriodLeft}>
                                                <Ionicons name="partly-sunny" size={30} color={'#A6A6A6'} />
                                              </View>
                                              <View style={styles.containerPeriodRight}>
                                                <Text numberOfLines={1} style={styles.textClass}>{item.unidadeCurricular.nome}</Text>
                                              </View>
                                              <View style={styles.containerPeriodRight}>
                                                <Text numberOfLines={1} style={styles.textClass}>{item.professor.nome}</Text>
                                              </View>
                                            </>
                                            : item.periodo === 'NOITE' ?
                                              <>
                                                <View style={styles.containerPeriodLeft}>
                                                  <Ionicons name="moon" size={30} color={'#11233E'} />
                                                </View>
                                                <View style={styles.containerPeriodRight}>
                                                  <Text numberOfLines={1} style={styles.textClass}>{item.unidadeCurricular.nome}</Text>
                                                </View>
                                                <View style={styles.containerPeriodRight}>
                                                  <Text numberOfLines={1} style={styles.textClass}>{item.professor.nome}</Text>
                                                </View>
                                              </>
                                              :
                                              <>
                                                <View style={styles.containerPeriodLeft}>
                                                  <Ionicons name="moon" size={30} color={'#11233E'} />
                                                </View>
                                                <View style={styles.containerPeriodRight}>
                                                  <Text style={styles.textAvailableClass}>Ambiente</Text>
                                                </View>
                                                <View style={styles.containerPeriodRight}>
                                                  <Text style={styles.textAvailableClass}>Disponível</Text>
                                                </View>
                                              </>
                                      }
                                    </TouchableOpacity>
                                  }
                                </View>
                              )}
                            />
                          }
                        </View>
                      </View>
                      :
                      EmptyListMessage()
                  )}
                </View>
              </View>
            </View>
          </Background>
        </ScrollView>
        {showModal == true ? (
          <ModalHome valueShowModal={setShowModal} idClass={idClickClass} />
        ) : (
          ""
        )}
      </View>
    </View>
  );
}
