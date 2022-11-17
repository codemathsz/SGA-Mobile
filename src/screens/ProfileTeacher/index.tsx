import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import { color } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import Photo from "../../assets/foto.png";
import { Background } from "../../components/Background";
import { THEME } from "../../themes";
import { AULAS } from "../../utils/aulas";

import { styles } from "./styles";
import { LogBox } from "react-native";

// importação do calendário
import { Calendar, LocaleConfig } from "react-native-calendars";
import API from "../../services/api";
import { Aula } from "../Home";
// Deixando o calendário em português
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
// Registrando a linguagem do calendário
LocaleConfig.defaultLocale = "pt-br";

export interface ClassesType {
  data: string
}

import photoProfile from '../../assets/photoprofile.png'

export function ProfileTeacher({ route }: any) {
  // Arrays que recebem aulas do professor
  const [classesFic, setClassesFic] = useState(['']);
  const [classesRegular, setClassesRegular] = useState(['']);
  const [lessonsFromTeacher, setLessonsFromTeacher] = useState([])
  // const para passar o dia para o indicador maior
  const [daySelected, setDaySelected] = useState(0);
  const [dayIndicator, setDayIndicator] = useState('')

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = dayCurrent + "/" + monthCurrent + "/" + yearCurrent;


  async function getLessonFromTeacherDidMount() {
    const respose = await API.get(`/api/aula/prof?idProf=${route.params.data.id}&data=${dayIndicator === '' ? dateCurrent : dayIndicator}`)
    setLessonsFromTeacher(respose.data)
  }

  // Deixando o dia marcado no calendário
  // Função que recebe as aulas do professor por tipo
  async function getClassesDidMount() {
    try {
      // info Professor
      let idProf = route.params.data.id;
      // deixando as arrays vazias para não entrarem em conflito
      classesRegular.splice(0);

      // Recebendo da API
      const responseFic = await API.get(
        `api/aula/aulaTipo?prof=${idProf}&tipo=FIC`
      );
      setClassesFic(responseFic.data);
      const responseRegular = await API.get(
        `api/aula/aulaTipo?prof=${idProf}&tipo=REGULAR`
      );
      setClassesRegular(responseRegular.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getClassesDidMount();
  }, []);

  useEffect(() => {
    getLessonFromTeacherDidMount()
  }, [dayIndicator])



  const getMarkedDates = (TODAY, FIC, REGULAR) => {
    let markedDates = {}

    markedDates[TODAY] = {
      ...markedDates[TODAY],
      selected: true, marked: true, selectedColor: 'green', dotColor: THEME.COLORS.AZUL_300
    }



    FIC.forEach(lessonFIC => {
      markedDates[lessonFIC] = {
        ...markedDates[lessonFIC],
        selected: true, marked: true, selectedColor: THEME.COLORS.AZUL_300, dotColor: THEME.COLORS.AZUL_300
      }

    });

    REGULAR.forEach(lessonREGULAR => {
      markedDates[lessonREGULAR] = {
        ...markedDates[lessonREGULAR],
        selected: true, marked: true, selectedColor: THEME.COLORS.AZUL_500, dotColor: THEME.COLORS.AZUL_500

      }
    });




    return markedDates
  }


  console.log(getMarkedDates(dayIndicator, classesFic, classesRegular))
  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.contentPhoto}>
            <View>
              <Image
                source={route.params?.data?.foto == null ? photoProfile : { uri: route.params?.data?.foto }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 200
                }}
              />
            </View>
            <View style={styles.nameTeacher}>
              <Text style={styles.name}>{route.params?.data?.nome}</Text>
            </View>
          </View>
          <View
            style={
              Platform.OS === "ios"
                ? styles.calendarIOS
                : styles.calendarANDROID
            }
          >
            <Calendar
              style={{
                width: "100%",
                height: "auto",
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

              onDayPress={(day) => {
                var indicatorDay = day.dateString;
                var daySelect = day.day
                var monthSelect = day.month
                var yearSelect = day.year
                var dateSelectCurrent = `${daySelect}/${monthSelect}/${yearSelect}`

                setDayIndicator(dateSelectCurrent)
              }}

              markedDates={getMarkedDates(dayIndicator, classesFic, classesRegular)}
            />
            <View style={styles.contentSubTitleCalendar}>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{ width: 18, height: 18, backgroundColor: "#f69528" }}
                />
                <Text>Férias</Text>
              </View>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: THEME.COLORS.AZUL_300,
                  }}
                />
                <Text>FIC</Text>
              </View>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: THEME.COLORS.AZUL_500,
                  }}
                />
                <Text>REGULAR</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
                fontSize: THEME.FONT_SIZE.LG,
              }}
            >
              Aulas
            </Text>
          </View>
          {/* Aulas do Professor */}
          <FlatList
            data={lessonsFromTeacher}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={
                    Platform.OS === "ios"
                      ? styles.containerListIOS
                      : styles.containerListANDROID
                  }
                >
                  <View style={styles.item}>
                    <Text>{item.data}</Text>
                    <Text>{item.unidadeCurricular.nome}</Text>
                    <Text>{item.periodo}</Text>
                  </View>
                </View>
              </View>
            )}
            style={{ width: "100%" }}
          />
        </View>
      </Background>
    </ScrollView>
  );
}
