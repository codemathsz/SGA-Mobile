import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";

import { styles } from "./styles";
import { THEME } from "../../themes";
import API from "../../services/api";

interface unidadeCurricular{
  id: string,
  nome: string,
  horas:string
}

export function AdvancedSearch() {
  // const para o select da competência
  const [selectedCompetence, setSelectedCompetence] = useState([]);
  // const para o select de período
  const [selectedPeriod, setSelectedPeriod] = useState([]);
  const [periods, setPeriods] = useState([
    "Selecione um período",
    "Manhã",
    "Tarde",
    "Noite",
  ]);
  // const para RadioButton
  const [localeClasses, setLocaleClasses] = useState("senai");
  // const para dias selecionados
  const [dayDom, setDayDom] = useState(false);
  const [daySeg, setDaySeg] = useState(false);
  const [dayTer, setDayTer] = useState(false);
  const [dayQua, setDayQua] = useState(false);
  const [dayQui, setDayQui] = useState(false);
  const [daySex, setDaySex] = useState(false);
  const [daySab, setDaySab] = useState(false);

  const [unidadeCurricular, setUnidadeCurricular ] = useState<unidadeCurricular[]>([])

  // const para a data inicio e data final
  const [dateInit, setDateInit] = useState(new Date());
  const [openDateInit, setOpenDateInit] = useState(false);
  const [dateFinal, setDateFinal] = useState(new Date());
  const [openDateFinal, setOpenDateFinal] = useState(false);

  var monthDateInit = String(dateInit.getMonth() + 1).padStart(2, '0');
  var valueDateInit = String(
    `${dateInit.getDate()}/${monthDateInit}/${dateInit.getFullYear()}`
  );

  var monthDateFin = String(dateFinal.getMonth() + 1).padStart(2, '0');
  var valueDateFinal =
    dateFinal < dateInit
      ? DateFinalEqualsInit()
      : String(
          `${dateFinal.getDate()}/${monthDateFin}/${dateFinal.getFullYear()}`
        );

  function DateFinalEqualsInit() {
    return (valueDateFinal = valueDateInit);
  }

  // function para saber se dia foi selecionado ou não
  const daySelected = (day) => {
    switch (day) {
      case 1:
        if (dayDom == false) {
          setDayDom(true);
        } else {
          setDayDom(false);
        }
        break;
      case 2:
        if (daySeg == false) {
          setDaySeg(true);
        } else {
          setDaySeg(false);
        }
        break;
      case 3:
        if (dayTer == false) {
          setDayTer(true);
        } else {
          setDayTer(false);
        }
        break;
      case 4:
        if (dayQua == false) {
          setDayQua(true);
        } else {
          setDayQua(false);
        }
        break;
      case 5:
        if (dayQui == false) {
          setDayQui(true);
        } else {
          setDayQui(false);
        }
        break;
      case 6:
        if (daySex == false) {
          setDaySex(true);
        } else {
          setDaySex(false);
        }
        break;
      case 7:
        if (daySab == false) {
          setDaySab(true);
        } else {
          setDaySab(false);
        }
        break;
      default:
        break;
    }
  };

  // funções da datas inicio e fim
  const onChangeDateInit = (event, selectedDate) => {
    setOpenDateInit(false);
    setDateInit(selectedDate);
  };

  const showDateInit = () => {
    setOpenDateInit(true);
  };

  const onChangeDateFinal = (event, selectedDate) => {
    setOpenDateFinal(false);
    setDateFinal(selectedDate);
  };

  const showDateFinal = () => {
    setOpenDateFinal(true);
  };

  async function getUnidadeCurricularDidMount() {
    const response = await API.get('/api/unidade')
    setUnidadeCurricular(response.data)
  }

  useEffect(() => {
    getUnidadeCurricularDidMount()
  },[])

  console.log("dataFinal: " + valueDateFinal);
  return (
    <Background>
      <ScrollView>
        <Header
          title="Busca Avançada"
          subTitle="Solicite a disponibilidade de um Professor e um Ambiente"
        />
        <View style={styles.containerForm}>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Curso</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Digite o nome do Curso"
            />
          </View>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Principal Competência</Text>
            <View style={styles.selectForm}>
              <Picker
                selectedValue={selectedCompetence}
                onValueChange={(itemValue) => setSelectedCompetence(itemValue)}
                mode={"dropdown"}
              >
                <Picker.Item
                  label="Selecione a Competência"
                  value="default"
                  style={styles.itemSelect}
                />
                {unidadeCurricular.map((cr) => {
                  return (
                    <Picker.Item
                      label={cr.nome}
                      value={cr.nome}
                      style={styles.itemSelect}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Empresa</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Digite o nome da Empresa"
            />
          </View>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Onde será o treinamento ?</Text>
            <View style={styles.containerRadio}>
              <View style={styles.divRadio}>
                <RadioButton
                  value="senai"
                  color={
                    localeClasses == "senai" ? THEME.COLORS.AZUL_300 : "black"
                  }
                  status={localeClasses === "senai" ? "checked" : "unchecked"}
                  onPress={() => setLocaleClasses("senai")}
                />
                <Text>Senai</Text>
              </View>
              <View style={styles.divRadio}>
                <RadioButton
                  value="company"
                  color={
                    localeClasses == "company" ? THEME.COLORS.AZUL_300 : "black"
                  }
                  status={localeClasses === "company" ? "checked" : "unchecked"}
                  onPress={() => setLocaleClasses("company")}
                />
                <Text>Empresa</Text>
              </View>
            </View>
          </View>
          {localeClasses === "company" ? (
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>CEP</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="Digite o cep do local da empresa"
              />
            </View>
          ) : (
            ""
          )}
          {/* Data Inicio e Data Final */}
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Data Inicio</Text>
            <View style={styles.divDate}>
              <TouchableOpacity
                onPress={showDateInit}
                style={styles.divCalendar}
              >
                <Text style={styles.textDate}>{valueDateInit}</Text>
                <Ionicons
                  name="calendar"
                  size={30}
                  color={THEME.COLORS.TEXT_PLACE}
                />
              </TouchableOpacity>
              {openDateInit == true ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateInit}
                  mode={"date"}
                  is24Hour={true}
                  display={"default"}
                  onChange={onChangeDateInit}
                />
              ) : (
                ""
              )}
            </View>
          </View>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Data Final</Text>
            <View style={styles.divDate}>
              <TouchableOpacity
                onPress={showDateFinal}
                style={styles.divCalendar}
              >
                <Text style={styles.textDate}>{valueDateFinal}</Text>
                <Ionicons
                  name="calendar"
                  size={30}
                  color={THEME.COLORS.TEXT_PLACE}
                />
              </TouchableOpacity>
              {openDateFinal == true ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={dateFinal}
                  mode={"date"}
                  is24Hour={true}
                  display={"default"}
                  onChange={onChangeDateFinal}
                  minimumDate={dateInit}
                />
              ) : (
                ""
              )}
            </View>
          </View>
          {/* Selecionador de dias*/}
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Dias da Semana</Text>
            <View style={styles.containerDays}>
              <TouchableOpacity
                style={dayDom == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(1)}
              >
                <Text
                  style={
                    dayDom == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Dom
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={daySeg == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(2)}
              >
                <Text
                  style={
                    daySeg == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Seg
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dayTer == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(3)}
              >
                <Text
                  style={
                    dayTer == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Ter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dayQua == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(4)}
              >
                <Text
                  style={
                    dayQua == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Qua
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={dayQui == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(5)}
              >
                <Text
                  style={
                    dayQui == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Qui
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={daySex == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(6)}
              >
                <Text
                  style={
                    daySex == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Sex
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={daySab == true ? styles.daySelected : styles.divDays}
                onPress={() => daySelected(7)}
              >
                <Text
                  style={
                    daySab == true ? styles.textDaySelected : styles.textDay
                  }
                >
                  Sab
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divForm}>
            <Text style={styles.titleForm}>Período</Text>
            <View style={styles.selectForm}>
              <Picker
                selectedValue={selectedPeriod}
                onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
                mode={"dropdown"}
              >
                {periods.map((cr) => {
                  return (
                    <Picker.Item
                      label={cr}
                      value={cr}
                      style={styles.itemSelect}
                    />
                  );
                })}
              </Picker>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
