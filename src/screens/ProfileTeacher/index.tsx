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
  data: string;
}

import photoProfile from "../../assets/photoprofile.png";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export function ProfileTeacher({ route }: any) {
  const [classesFic, setClassesFic] = useState([""]);
  const [classesRegular, setClassesRegular] = useState([""]);
  const [lessonsFromTeacher, setLessonsFromTeacher] = useState([]);

  const [holidaysTeacher, setHolidaysTeacher] = useState([]);
  const [daySelected, setDaySelected] = useState(0);
  const [dayIndicator, setDayIndicator] = useState("");

  // função para o calendário iniciar na data atual
  var date = new Date();
  var dayCurrent = String(date.getDate()).padStart(2, "0");
  var monthCurrent = String(date.getMonth() + 1).padStart(2, "0");
  var yearCurrent = date.getFullYear();
  const dateCurrent = dayCurrent + "/" + monthCurrent + "/" + yearCurrent;

  async function getLessonFromTeacherDidMount() {
    const response = await API.get(
      `/api/aula/prof?idProf=${route.params.data.id}&data=${
        dayIndicator === "" ? dateCurrent : dayIndicator
      }`
    );
    setLessonsFromTeacher(response.data);
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
        `/api/aula/aulaTipo?prof=${idProf}&tipo=FIC`
      );
      setClassesFic(responseFic.data);
      const responseRegular = await API.get(
        `/api/aula/aulaTipo?prof=${idProf}&tipo=REGULAR`
      );
      setClassesRegular(responseRegular.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHolidaysTeacherDidMount() {
    try {
      let idTeacher = route.params.data.id;
      holidaysTeacher.splice(0);
      const response = await API.get(
        `/api/ausencia/buscaDataAusencia/${idTeacher}`
      );
      setHolidaysTeacher(response.data);
    } catch (error) {
      console.log(`Erro ao trazer as férias do professor ${error}`);
    }
  }

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getClassesDidMount();
    getHolidaysTeacherDidMount();
  }, []);

  useEffect(() => {
    getLessonFromTeacherDidMount();
  }, [dayIndicator]);

  const getMarkedDates = (TODAY, FIC, REGULAR, holiday) => {
    let markedDates = {};

    markedDates[TODAY] = {
      ...markedDates[TODAY],
      selected: true,
      marked: true,
      selectedColor: "green",
      dotColor: THEME.COLORS.AZUL_300,
    };

    FIC.forEach((lessonFIC) => {
      markedDates[lessonFIC] = {
        ...markedDates[lessonFIC],
        selected: true,
        marked: true,
        selectedColor: THEME.COLORS.AZUL_300,
        dotColor: THEME.COLORS.AZUL_300,
      };
    });

    // Datas de cursos regulares
    REGULAR.forEach((lessonREGULAR) => {
      markedDates[lessonREGULAR] = {
        ...markedDates[lessonREGULAR],
        selected: true,
        marked: true,
        selectedColor: THEME.COLORS.AZUL_500,
        dotColor: THEME.COLORS.AZUL_500,
      };
    });

    // Recebe datas das férias do professor
    let dateInitial = holiday[0];
    let dateFinal = holiday[1];
    let dateHoliday = dateInitial;

    console.log(`ADICIONANDO AS FÉRIAS`);
    markedDates[dateHoliday] = {
      ...markedDates[dateHoliday],
      selected: true,
      marked: true,
      selectedColor: THEME.COLORS.CAPTION_500,
      dotColor: THEME.COLORS.CAPTION_500,
    };

    for (dateInitial in dateFinal) {
      dateHoliday++;
      console.log(`Data Holiday: ${dateHoliday}`);
      markedDates[dateHoliday] = {
        ...markedDates[dateHoliday],
        selected: true,
        marked: true,
        selectedColor: THEME.COLORS.ORANGE_TEACHER,
      };
    }

    return markedDates;
  };

  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.contentPhoto}>
            <View>
              <Image
                source={
                  route.params?.data?.foto == null
                    ? photoProfile
                    : { uri: route.params?.data?.foto }
                }
                style={{
                  width: 200,
                  height: 200,
                  padding: 5,
                  borderTopRightRadius:40,
                  borderTopLeftRadius:40,
                }}
              />
            </View>
            <View style={styles.nameTeacher}>
              <MaskedView
                maskElement={
                  <Text
                    style={[styles.name, { backgroundColor: "transparent" }]}
                  >
                   {route.params?.data?.nome}
                  </Text>
                }
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#25B5E9", "#367FBF"]}
                >
                  <Text style={[styles.name, { opacity: 0 }]}>{route.params?.data?.nome}</Text>
                </LinearGradient>
              </MaskedView>
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
                var daySelect = day.day;
                var monthSelect = day.month;
                var yearSelect = day.year;
                var dateSelectCurrent = `${daySelect}/${monthSelect}/${yearSelect}`;

                setDayIndicator(dateSelectCurrent);
              }}
              markedDates={getMarkedDates(
                dayIndicator,
                classesFic,
                classesRegular,
                holidaysTeacher
              )}
            />
            <View style={styles.contentSubTitleCalendar}>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: THEME.COLORS.CAPTION_500,
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.textSubTitle}>Férias</Text>
              </View>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: THEME.COLORS.AZUL_300,
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.textSubTitle}>FIC</Text>
              </View>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{
                    width: 18,
                    height: 18,
                    backgroundColor: THEME.COLORS.AZUL_500,
                    borderRadius: 10,
                  }}
                />
                <Text style={styles.textSubTitle}>REGULAR</Text>
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
