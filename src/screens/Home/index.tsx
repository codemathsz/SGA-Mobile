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

import { Loading } from "../../components/Loading";
import API from "../../services/api";
import { THEME } from "../../themes";
import { ModalHome } from "../../components/ModalHome";
import { InicioCard } from "../../components/InicioCard";

export interface Aula {
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
  aulas: [
    {
      id: number;
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
            nivel:number
          }
        ]
      }
      cargaDiaria: number;
      data: string;
      unidadeCurricular:{
        id: number;
        nome: string;
      }
      codTurma: string;
      periodo: string;

    }
  ]
}

export function Home() {

  const [showModal, setShowModal] = useState(false);
  const [idFromLessonForModal, setIdFromLessonForModal] = useState();
  const [daySelected, setDaySelected] = useState(0);
  const [dayIndicator, setDayIndicator] = useState("");
  const [dayFromHolidayAndVacation, setDayFromHolidayAndVacation] = useState([""])
  const [periodSelected, setPeriodSelected] = useState("all");
  const [valueSearch, setValueSearch] = useState();
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [classesSearch, setClassesSearch] = useState<Aula[]>([]);
  const [dateSelectedFormat, setDateSelectedFormat] = useState("");
  const [objectEnvironment, setObjectEnvironment] = useState<any[]>([])
  const [environmentFromDataSelected, setEnvironmentFromDataSelected] = useState()

  // listagem de aula na home, por uma data selecionada
  const [listLessonFromDaySelected, setListLessonFromDaySelected] = useState<Aula[]>([]);

  const [containerLessonsFromDataSelected, setContainerLessonsFromDataSelected] = useState([])


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



  async function getDaysFormHolidayAndVacation() {
    try {

      const response = await API.get('/api/dnl/buscaDnls');
      setDayFromHolidayAndVacation(response.data)
    } catch (error) {
      return error
    }
  }

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

  const [data, setData] = useState<String[]>([])

  async function getAulaFromDaySelected() {
    try {
      const response = await API.get(
        `/api/aula/filtroAula?data=${dayIndicator === '' ? dateCurrent : dayIndicator}`
      );
      setListLessonFromDaySelected(response.data);
      var nameEnviroment: String[] = [];
      if (response.data.length > 0) {
        response.data.map((v) => {
          nameEnviroment.push(v.ambiente.nome);
        });
      }
      const a = nameEnviroment.filter((val, id) => nameEnviroment.indexOf(val) == id);

      setLoading(false);
    } catch (error) {
      return console.log(error);
    }
  }

  function getEnvironmentFromDaySelected(item) {
    setEnvironmentFromDataSelected(item)
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

  const receiveIdClickClass = (id) => {
    setIdFromLessonForModal(id);
    setShowModal(true);
  };

  const isListFromLessonsEmpty = () => {
    return <Text style={styles.emptyListStyle}>Nenhuma aula encontrada!</Text>;
  };

  const getMarkedDates = (HOLIDAYS, DAYINDICATOR) => {
    let markedDates = {}

    HOLIDAYS.forEach(holidays => {
      markedDates[holidays] = {
        ...markedDates[holidays],
        disabled: true, dotColor: THEME.COLORS.ALERT, marked: false,  
      }

    });

    markedDates[DAYINDICATOR] = {
      ...markedDates[DAYINDICATOR],
      selected: true, marked: true
    }

    return markedDates
  }

  useEffect(() => {
    getDaysFormHolidayAndVacation()
  }, [])

  useEffect(() => {
    getAulaFromDaySelected();
    setLoading(true)
  }, [dayIndicator]);


  console.log('day indicator :  '+dayIndicator)

  return (
    <View>
      <View style={{ height: "100%" }}>
        <ScrollView
          
        >
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
                  disabledArrowColor: "#da0101",
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
                markedDates={getMarkedDates(dayFromHolidayAndVacation, dayIndicator)}
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

                    <FlatList
                      data={listLessonFromDaySelected}
                      keyExtractor={(item) => item.ambiente.id.toString()}
                      renderItem={({ item }) => (
                        <InicioCard
                          data={item}
                          /* valueModal={showModal} */
                          sendsId={receiveIdClickClass}
                          valuePeriod={periodSelected}
                        />

                      )}
                      ListEmptyComponent={isListFromLessonsEmpty}
                    />


                  )}
                </View>
              </View>
            </View>
          </Background>
        </ScrollView>
        {showModal == true ? (
          <ModalHome valueShowModal={setShowModal} idClass={idFromLessonForModal} />
        ) : (
          ""
        )}
      </View>
    </View>
  );
}