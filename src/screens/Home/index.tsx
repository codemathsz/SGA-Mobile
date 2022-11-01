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

export interface Aula {
  id: number
  cargaDiaria: string
  codTurma: string
  data: string
  periodo: string
  ambiente: {
    id: number,
    nome: string,
    capacidade: number,
    tipoAmbiente: string,
    cep: string,
    complemento: string
    ativo: string,
    endereco: string
  }
  professor: {
    id: number,
    nome: string,
    email: string,
    crgaSemanal: string,
    ativo: string,
    competencia: []
  }
  unidadeCurricular: {
    id: number,
    nome: string,
    horas: string
  }
}

export function Home() {

  // para guardar a lista de aulas
  const [aula, setAula] = useState<Aula[]>([]);
  // para abrir a modal
  const [showModal, setShowModal] = useState(false);
  // const para passar o dia para o indicador maior
  const [daySelected, setDaySelected] = useState(0);
  // passando o dia selecionado para o calendário
  const [dayIndicator, setDayIndicator] = useState('');
  // const para RadioButton
  const [periodSelected, setPeriodSelected] = useState("all");
  // para o valor do input search
  const [valueSearch, setValueSearch] = useState();
  // para saber se o filtro foi aplicado
  const [filter, setFilter] = useState(false);
  // para saber se a busca foi aplicada
  const [search, setSearch] = useState(false);
  // para guardar a data selecionada formatada
  const [dateSelectedFormat, setDateSelectedFormat] = useState('');

  // id aula clicada
  const [dataAulaModal, setDataAulaModal] = useState([]);


  // funções para o calendário

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = yearCurrent + "-" + monthCurrent + "-" + dayCurrent;
  const dateInitial = dayCurrent + "/" + monthCurrent + "/" + yearCurrent
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

  // função para aplicar o search
  const searchReceive = (textValue) => {
    // pegar o valor e colocar no value,
    // para depois poder anular ele em qualquer momento
    setValueSearch(textValue);
    // Colocar o método aqui quando aplicar a busca
    //               AQUI
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


  // api para pegar as aulas
  async function getAulaDidMount() {
    try {
      const response = await API.get('/api/aula')
      setAula(response.data)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getAulaDidMount()
  }, [])

  const clickModal = (v) => {
    setShowModal(v)
  }

  console.log(showModal)
  return (
    <View>
      {
        showModal == true ?
          <View style={{ height: '100%' }}>
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


                  // Props para o dia selecionado
                  onDayPress={(day) => {

                    var indicatorDay = day.dateString;
                    var daySelect = day.day
                    var monthSelect = day.month
                    var yearSelect = day.year
                    var dateSelectCurrent = `${daySelect}/${monthSelect}/${yearSelect}`
                    setDateSelectedFormat(dateSelectCurrent)
                    setDayIndicator(indicatorDay)
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
                  style={Platform.OS === 'ios' ? styles.btnModalIOS : styles.btnModalANDROID}

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
                    status={periodSelected === "morning" ? "checked" : "unchecked"}
                    onPress={() => setPeriodSelected("morning")}
                  />
                  <Text style={styles.textRadioTwo}>Manhã</Text>
                </View>
                <View style={styles.containerRadio}>
                  <RadioButton
                    value="afternoon"
                    color="black"
                    status={periodSelected === "afternoon" ? "checked" : "unchecked"}
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
              <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                {
                  aula.length == 0 ?
                    <Text style={{ fontSize: 22, paddingBottom: 30, color: THEME.COLORS.SELECT }}>Nenhuma aula encontrada!</Text>
                    :
                    <View style={styles.containerLista}>
                      <View style={styles.msgDate}>
                        <Text style={{ color: THEME.COLORS.SELECT, textTransform: 'uppercase' }}>{`Aulas do dia: ${dateSelectedFormat == '' ? dateInitial : dateSelectedFormat}`}</Text>
                      </View>
                      <View style={{ width: '100%' }}>
                        <FlatList
                          data={aula}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({ item }) =>
                            <InicioCard
                              data={item}
                              valueModal={clickModal}
                              idItem={setDataAulaModal}
                            />
                          }

                        />
                      </View>

                    </View>
                }

              </View>

            </Background>
            <View style={styles.contentModal}>
              <View style={styles.modal}>
                <View style={styles.headerModal}>
                  <View><Text style={styles.titleHeaderModal}>Informações da Aula</Text></View>
                  <TouchableOpacity
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={styles.closeModal}>X</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity >
                  <Text style={{ color: '#000' }}>Ambiente: {dataAulaModal?.ambiente?.nome}</Text>
                  <Text style={{ color: '#000' }}>Aula: {dataAulaModal?.unidadeCurricular?.nome}</Text>
                  <Text style={{ color: '#000' }}>Carga Horária da Unidade Curricular: {dataAulaModal?.unidadeCurricular?.horas} horas</Text>
                  <Text style={{ color: '#000' }}>Carga Diaria: {dataAulaModal?.cargaDiaria} horas</Text>
                  <Text style={{ color: '#000' }}>Professor(a): {dataAulaModal?.professor?.nome}</Text>
                  <Text style={{ color: '#000' }}>Período: {dataAulaModal?.periodo}</Text>
                  <Text style={{ color: '#000' }}>Código da Turma: {dataAulaModal?.codTurma}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>


          : <ScrollView

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


                  // Props para o dia selecionado
                  onDayPress={(day) => {

                    var indicatorDay = day.dateString;
                    var daySelect = day.day
                    var monthSelect = day.month
                    var yearSelect = day.year
                    var dateSelectCurrent = `${daySelect}/${monthSelect}/${yearSelect}`
                    setDateSelectedFormat(dateSelectCurrent)
                    setDayIndicator(indicatorDay)
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
                  style={Platform.OS === 'ios' ? styles.btnModalIOS : styles.btnModalANDROID}

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
                    status={periodSelected === "morning" ? "checked" : "unchecked"}
                    onPress={() => setPeriodSelected("morning")}
                  />
                  <Text style={styles.textRadioTwo}>Manhã</Text>
                </View>
                <View style={styles.containerRadio}>
                  <RadioButton
                    value="afternoon"
                    color="black"
                    status={periodSelected === "afternoon" ? "checked" : "unchecked"}
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
              <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                {
                  aula.length == 0 ?
                    <Text style={{ fontSize: 22, paddingBottom: 30, color: THEME.COLORS.SELECT }}>Nenhuma aula encontrada!</Text>
                    :
                    <View style={styles.containerLista}>
                      <View style={styles.msgDate}>
                        <Text style={{ color: THEME.COLORS.SELECT, textTransform: 'uppercase' }}>{`Aulas do dia: ${dateSelectedFormat == '' ? dateInitial : dateSelectedFormat}`}</Text>
                      </View>
                      <View style={{ width: '100%' }}>
                        <FlatList
                          data={aula}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({ item }) =>
                            <InicioCard
                              data={item}
                              valueModal={clickModal}
                              idItem={setDataAulaModal}
                            />
                          }

                        />
                      </View>

                    </View>
                }

              </View>

            </Background>
          </ScrollView>
      }

    </View>
  );
}
