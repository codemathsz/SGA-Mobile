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
  id: string;
  professor: {
    id: string;
    nome: string;
    email: string;
    cargaSemanal: string;
    ativo: boolean;
    competencia: [
      {
        id: string;
        unidadeCurricular: {
          id: string;
          nome: string;
          horas: string;
        };
        nivel: string;
      }
    ];
  };
  ambiente: {
    id: string;
    nome: string;
    capacidade: string;
    tipo: string;
    cep: string;
    complemento: string;
    ativo: boolean;
    endereco: string;
  };
  cargaDiaria: string;
  data: string;
  unidadeCurricular: {
    id: string;
    nome: string;
    horas: string;
  };
  curso: {
    id: string;
    nome: string;
    tipo: string;
    ativo: boolean;
    unidadeCurricular: [
      {
        id: string;
        nome: string;
        horas: string;
      }
    ];
  };
  codTurma: string;
  periodo: string;
}

export function ProfileTeacher({ route }: any) {
  // Arrays que recebem aulas do professor
  const [classesFic, setClassesFic] = useState<ClassesType[]>();
  const [classesRegular, setClassesRegular] = useState<ClassesType[]>([]);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getClassesDidMount();
  }, []);

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

  // TESTE de dados aulas por tipo
  console.log(classesFic)
  console.log(classesRegular)

  const typeDayStyle = {
    // [classesFicDate]: { selected: true, marked: true, color:THEME.COLORS.AZUL_300, textColor:THEME.COLORS.WHITE},
    //[classesRegular]: { selected: true, marked: true, color:THEME.COLORS.AZUL_500, textColor:THEME.COLORS.WHITE},
  };
  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.contentPhoto}>
            <View>
              <Image
                source={Photo}
                style={{
                  width: 200,
                  height: 200,
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
                selectedDayBackgroundColor: "#CDCDCD",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#25B5E9",
                dayTextColor: "#1E1E40",
                textDisabledColor: "rgba(17, 17, 17, 0.2)",
                dotColor: "#fff",
                selectedDotColor: "#CDCDCD",
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
              markedDates={typeDayStyle}
            />
            <View style={styles.contentSubTitleCalendar}>
              <View style={styles.subTitleCalendar}>
                <View
                  style={{ width: 18, height: 18, backgroundColor: "#CDCDCD" }}
                />
                <Text>Dias Disponíveis</Text>
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
            data={AULAS}
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
                    <Text>{item.dia}</Text>
                    <Text>{item.curso}</Text>
                    <Text>{item.Periodo}</Text>
                  </View>
                  <View style={styles.item}>
                    <Text>{item.dia}</Text>
                    <Text>{item.curso}</Text>
                    <Text>{item.Periodo}</Text>
                  </View>
                </View>
              </View>
            )}
            style={{ width: "100%", height: 350 }}
          />
        </View>
      </Background>
    </ScrollView>
  );
}
