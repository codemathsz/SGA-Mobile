import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
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
import AppLoading from "expo-app-loading";

import { ViewDay } from "../../components/ViewDay";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Filter } from "../../components/Filter";
import { THEME } from "../../themes";
import { MAIN } from "../../utils/listMain";

import { InicioCard } from "../../components/InicioCard";
import { Loading } from "../../components/Loading";

interface HomeProps {}

export function Home() {
  const [showModal, setShowModal] = useState(false);
  // const para passar o dia para o indicador maior
  const [daySelected, setDaySelected] = useState(0);
  // passando o dia selecionado para o calendário
  const [dayIndicator, setDayIndicator] = useState('');
  const [periodSelected, setPeriodSelected] = useState("all");
  // para o valor do input search
  const [valueSearch, setValueSearch] = useState();
  // para saber se o filtro foi aplicado
  const [filter, setFilter] = useState(false);
  // para saber se a busca foi aplicada
  const [search, setSearch] = useState(false);

  // função para retornar as fonts depois do loading do app

  let [fontsLoaded, error] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  // funções para o calendário

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = yearCurrent + "-" + monthCurrent + "-" + dayCurrent;

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

  return (
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
            // Props para os dias do calendário
            // dayComponent={}

            // Props para o dia selecionado
            onDayPress={(day) => {
              var passDate = day.day;
              var indicatorDay = day.dateString;
              setDaySelected(passDate);
              setDayIndicator(indicatorDay)
            }}

            markedDates={{
              [dayIndicator]: {selected: true, marked: true},
            }}
          />
          <View style={styles.sectionCentralization}>
            <ViewDay dateSelected={daySelected} />
          </View>
        </View>

        <View style={styles.containerSearch}>
          <Search
            placeholder="Pesquisar..."
            aplicSearch={searchAplic}
            receiveSearch={searchReceive}
            clenSearch={valueSearch}
          />
          <TouchableOpacity
            style={styles.btnModal}
            onPress={() => setShowModal(true)}
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
        <View>
          <FlatList
            data={MAIN}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <InicioCard data={item} />}
          ></FlatList>
        </View>
      </Background>
    </ScrollView>
  );
}
