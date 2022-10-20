import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
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
import { TeachersOptionsCard } from "../../components/TeachersOptionsCard";
import { FlatSearchAvanced } from "../../components/FlatSearchAvanced";
import { Teachers } from "../Teachers";
import { Ambientes } from "../Environments";
import { EnvironmentsOptionsCard } from "../../components/EnvironmentsOptionsCard";

interface unidadeCurricular {
  id: string;
  nome: string;
  horas: string;
}

export function AdvancedSearch() {
  // const para value do TextInput
  const [valueCurso, setValueCurso] = useState("");
  const [valueCompany, setValueCompany] = useState("");
  // valores pela seleção de resultados da busca
  const [selectedTeachers, setSelectedTeachers] = useState();

  const [selectedEnvironments, setSelectedEnvironments] = useState();
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
  // const para select de unidade curricular
  const [unidadeCurricular, setUnidadeCurricular] = useState<
    unidadeCurricular[]
  >([]);
  // Guarda respostas consumidas da API
  const [teachers, setTeachers] = useState<Teachers[]>([]);
  const [environment, setEnvironment] = useState<Ambientes[]>([]);
  // const para a data inicio e data final
  const [dateInit, setDateInit] = useState(new Date());
  const [openDateInit, setOpenDateInit] = useState(false);
  const [dateFinal, setDateFinal] = useState(new Date());
  const [openDateFinal, setOpenDateFinal] = useState(false);
  // const para saber se busca foi aplicada
  const [searchAplic, setSearchAplic] = useState(false);

  // Feita para saber os valores obtidos ao escolher a data do Date Picker
  var monthDateInit = String(dateInit.getMonth() + 1).padStart(2, "0");
  var valueDateInit = String(
    `${dateInit.getDate()}/${monthDateInit}/${dateInit.getFullYear()}`
  );

  var monthDateFin = String(dateFinal.getMonth() + 1).padStart(2, "0");
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
  // Receber valor de Data Inicio
  const onChangeDateInit = (event, selectedDate) => {
    setOpenDateInit(false);
    setDateInit(selectedDate);
  };
  // Abrir Date Picker da Data Inicio
  const showDateInit = () => {
    setOpenDateInit(true);
  };
  // Receber o valor da Data Final
  const onChangeDateFinal = (event, selectedDate) => {
    setOpenDateFinal(false);
    setDateFinal(selectedDate);
  };
  // função para aparecer o Date picker da Data Final
  const showDateFinal = () => {
    setOpenDateFinal(true);
  };

  // para ser aplicada quando for fazer a busca
  function searchApplied() {
    setSearchAplic(true);
    getTeachersDidMount();
    getEnvironmentDidMount();
  }

  // Recebe o valor do professor selecionado
  const teachersSelected = (t) => {
    setSelectedTeachers(t);
  };

  // função para quando for realizar outra busca
  function otherSearchApplied() {
    // tirando os valores dos resultados pela busca
    teachers.splice(0);
    environment.splice(0);
    setValueCurso("");
    setValueCompany("");
    selectedCompetence.splice(0);

    // retirando a busca
    setSearchAplic(false);
  }

  // recebendo unidades curriculares
  async function getUnidadeCurricularDidMount() {
    try {
      const response = await API.get("/api/unidade");
      setUnidadeCurricular(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // ALTERAR FUTURAMENTE recebe professores conforme a busca avançada
  async function getTeachersDidMount() {
    try {
      const response = await API.get("/api/professor");
      setTeachers(response.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  // ALTERAR FUTURAMENTE recebe ambientes conforme a busca Avançada
  async function getEnvironmentDidMount() {
    try {
      const response = await API.get("/api/ambiente");
      setEnvironment(response.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getUnidadeCurricularDidMount();
  }, []);

  console.log(selectedTeachers);

  return (
    <Background>
      <ScrollView>
        {searchAplic == true ? (
          ""
        ) : (
          <Header
            title="Busca Avançada"
            subTitle="Solicite a disponibilidade de um Professor e um Ambiente"
          />
        )}
        {searchAplic == true ? (
          <View style={styles.containerForm}>
            <Header
              title="Busca Realizada"
              subTitle="Organize sua busca avançada e compartilhe a informação exata do nosso sistema."
            />
            {/* Listagem de opções para o usuário */}
            <View style={styles.containerOptions}>
              <View style={styles.containerFlatlist}>
                <FlatList
                  ListHeaderComponent={
                    <FlatSearchAvanced
                      title="Professores"
                      subtitle="Selecione um professor."
                    />
                  }
                  data={teachers}
                  keyExtractor={(item) => item?.id}
                  renderItem={({ item }) => (
                    <TeachersOptionsCard
                      {...item}
                      data={item}
                      onPressTeacher={teachersSelected}
                    />
                  )}
                  horizontal={false}
                  showsVerticalScrollIndicator={true}

                  //onPress={({item}) => teachersSelected(item.nome)}
                />
              </View>
              <View style={styles.containerFlatlist}>
                <FlatList
                  ListHeaderComponent={
                    <FlatSearchAvanced
                      title="Ambientes"
                      subtitle="Selecione um ambiente."
                    />
                  }
                  data={environment}
                  keyExtractor={(item) => item?.id}
                  renderItem={({ item }) => (
                    <EnvironmentsOptionsCard data={item} />
                  )}
                  horizontal={false}
                  showsVerticalScrollIndicator={true}
                />
              </View>
            </View>
            {/* Texto a ser compartilhado */}
            <View style={styles.containerText}>
              <Text style={styles.textResult}>
                A solicitação do{" "}
                <Text style={styles.textResultState}>{valueCurso}</Text>, pela{" "}
                <Text style={styles.textResultState}>{valueCompany}</Text>{" "}
                poderá ser marcado. Sendo assim a data é de {valueDateInit} até{" "}
                {valueDateFinal}, incluindo os dias da semana
                {dayDom == true ? (
                  <Text style={styles.textResultState}> Domingo </Text>
                ) : (
                  ""
                )}
                {daySeg == true ? (
                  <Text style={styles.textResultState}> Segunda </Text>
                ) : (
                  ""
                )}
                {dayTer == true ? (
                  <Text style={styles.textResultState}> Terça </Text>
                ) : (
                  ""
                )}
                {dayQua == true ? (
                  <Text style={styles.textResultState}> Quarta </Text>
                ) : (
                  ""
                )}
                {dayQui == true ? (
                  <Text style={styles.textResultState}> Quinta </Text>
                ) : (
                  ""
                )}
                {daySex == true ? (
                  <Text style={styles.textResultState}> Sexta </Text>
                ) : (
                  ""
                )}
                {daySab == true ? (
                  <Text style={styles.textResultState}> Sábado </Text>
                ) : (
                  ""
                )}
                , no período da{" "}
                <Text style={styles.textResultState}>{selectedPeriod}</Text>.
                Será realizado pelo professor(a){" "}
                <Text style={styles.textResultState}>
                  {selectedTeachers == null
                    ? "Selecione um professor"
                    : selectedTeachers}
                </Text>
                , em {selectedEnvironments}.
              </Text>
            </View>
            <View style={styles.btnsSearchAplic}>
              <TouchableOpacity style={styles.btn}>
                <Text
                  style={styles.textBtn}
                  onPress={() => otherSearchApplied()}
                >
                  Outra Busca
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Compartilhar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.containerForm}>
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Curso</Text>
              <TextInput
                style={styles.inputForm}
                placeholder="Digite o nome do Curso"
                value={valueCurso}
                onChangeText={(t) => setValueCurso(t)}
              />
            </View>
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Principal Competência</Text>
              <View style={styles.selectForm}>
                <Picker
                  selectedValue={selectedCompetence}
                  onValueChange={(itemValue) =>
                    setSelectedCompetence(itemValue)
                  }
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
                value={valueCompany}
                onChangeText={(t) => setValueCompany(t)}
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
                      localeClasses == "company"
                        ? THEME.COLORS.AZUL_300
                        : "black"
                    }
                    status={
                      localeClasses === "company" ? "checked" : "unchecked"
                    }
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
            <View style={styles.containerSearch}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => searchApplied()}
              >
                <Text style={styles.textBtn}>Buscar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </Background>
  );
}
