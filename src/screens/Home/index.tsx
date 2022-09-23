import React, { useState } from "react";
import { View, Button, Text, Image, TouchableOpacity } from "react-native";

import { Calendar, LocaleConfig } from "react-native-calendars";
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

interface HomeProps {}

export function Home() {
  
  const [showModal, setShowModal] = useState(false)
  const [daySelected, setDaySelected] = useState(null);

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
    return <AppLoading />;
  }

  // funções para o calendário

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = yearCurrent + "-" + monthCurrent + "-" + dayCurrent;

  // função para o componente "ViewDay"
  const daySelectedView = setDaySelected;

  return (
    <Background>
      <View>
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
              backgroundColor: "#FCFCFD",
              calendarBackground: "#FCFCFD",
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
              console.log("selected day", day);
              let passDay = day.day;
            }}
          />
          <View style={styles.sectionCentralization}>
            <ViewDay dateSelected={'22'} />
          </View>
        </View>
        <View style={styles.containerSearch}>
          <Search placeholder="Pesquisar..." />
          <TouchableOpacity style={styles.btnModal} onPress={() => setShowModal(true)}>
            <Filter />
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}
