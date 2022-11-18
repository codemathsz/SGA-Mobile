import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Vibration,
  Platform,
  ActivityIndicator,
  Share,
  Alert,
  Pressable,
  ActionSheetIOS,
} from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInputMask } from "react-native-masked-text";

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
  const [valueCep, setValueCep] = useState("");
  // valores pela seleção de resultados da busca
  const [selectedTeachers, setSelectedTeachers] = useState("");
  const [valueTeacher, setValueTeacher] = useState();
  const [selectedEnvironments, setSelectedEnvironments] = useState("");
  const [valueEnvironment, setValueEnvironment] = useState();
  // const para o select da competência
  const [selectedCompetence, setSelectedCompetence] = useState([]);
  const [selectedCompetenceIos, setSelectedCompetenceIos] = useState(
    "Selecione uma competência"
  );
  const [selectedCompetenceId, setSelectedCompetenceId] = useState("");
  // const para o select de período
  const [selectedPeriod, setSelectedPeriod] = useState([]);
  const [selectedPeriodIos, setSelectedPeriodIos] = useState(
    "Selecione um período"
  );
  const [periods, setPeriods] = useState([
    "Selecione um período",
    "MANHA",
    "TARDE",
    "NOITE",
  ]);
  // const para RadioButton
  const [localeClasses, setLocaleClasses] = useState("senai");
  // Dias Selecionados
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
  // usados para fazer a validação do formulário
  const [erroMessage, setErroMessage] = useState("");
  const [erroCurse, setErroCurse] = useState(false);
  const [erroCompetence, setErroCompetence] = useState(false);
  const [erroCompany, setErroCompany] = useState(false);
  const [erroCep, setErroCep] = useState(false);
  const [erroDay, setErroDay] = useState(false);
  const [erroPeriod, setErroPeriod] = useState(false);
  // validação para compartilhar a busca
  const [validateMessage, setValidateMessage] = useState(false);
  // validação da busca, se não possuir resultado
  const [erroResult, setErroResult] = useState(false);
  const [erroResultTitle, setErroResultTitle] = useState("");
  // validate data result
  const [completForm, setCompletForm] = useState(false);

  // Feita para saber os valores obtidos ao escolher a data do Date Picker
  var monthDateInit = String(dateInit.getMonth() + 1).padStart(2, "0");
  var dayDateInit = String(dateInit.getDate()).padStart(2, "0");
  var valueDateInit = String(
    `${dayDateInit}/${monthDateInit}/${dateInit.getFullYear()}`
  );

  var monthDateFin = String(dateFinal.getMonth() + 1).padStart(2, "0");
  var dayDateFin = String(dateFinal.getDate()).padStart(2, "0");
  var valueDateFinal =
    dateFinal < dateInit
      ? DateFinalEqualsInit()
      : String(`${dayDateFin}/${monthDateFin}/${dateFinal.getFullYear()}`);

  useEffect(() => {
    getUnidadeCurricularDidMount();
  }, []);

  useEffect(() => {
    getTeachersDidMount();
    getEnvironmentDidMount();
  }, [completForm]);

  // usado para a validação de compartilhamento
  useEffect(() => {
    if (
      localeClasses == "senai" &&
      selectedTeachers != "" &&
      selectedEnvironments != ""
    ) {
      setValidateMessage(true);
    } else if (localeClasses == "company" && selectedTeachers != "") {
      setValidateMessage(true);
    } else {
      setValidateMessage(false);
    }
  }, [valueTeacher, valueEnvironment]);

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
    await API.post("/api/professor/disponibilidade", {
      dataInicio: valueDateInit,
      diasSemana: [dayDom, daySeg, dayTer, dayQua, dayQui, daySex, daySab],
      dataFinal:valueDateFinal,
      unidadeCurricular: { selectedCompetenceId },
      periodo: Platform.OS == "android" ? selectedPeriod : selectedPeriodIos,
    })
      .then((response) => setTeachers(response.data))
      .catch((error) => {
        console.log(
          `Erro ao consumir o post de Professor em Busca Avançada: ${error}`
        );
      });
    // setTeachers(response.data);
  }

  // ALTERAR FUTURAMENTE recebe ambientes conforme a busca Avançada
  async function getEnvironmentDidMount() {
    try {
      const response = await API.get(
        `/api/ambiente/disponivel?dataInicio=${valueDateInit}&dias=${dayDom},${daySeg},${dayTer},${dayQua},${dayQui},${daySex},${daySab}&dataFinal=${valueDateFinal}&periodo=${
          Platform.OS == "android" ? selectedPeriod : selectedPeriodIos
        }`
      );
      setEnvironment(response.data);
    } catch (erro) {
      console.log(erro);
    }
  }

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
  // Value Data Final
  const onChangeDateFinal = (event, selectedDate) => {
    setOpenDateFinal(false);
    setDateFinal(selectedDate);
  };
  // Show Date picker Data Final
  const showDateFinal = () => {
    setOpenDateFinal(true);
  };

  // deixando erros no estado inicial
  const erroReset = () => {
    setCompletForm(false);
    setErroCurse(false);
    setErroCompetence(false);
    setErroCompany(false);
    setErroCep(false);
    setErroDay(false);
    setErroPeriod(false);
  };

  // fazendo a validação dos campos antes de fazer a busca
  async function searchApplied() {
    erroReset();
    // Validate Campos
    if (valueCurso === "") {
      Vibration.vibrate();
      setErroMessage("Campo obrigatório*");
      return setErroCurse(true);
    } else if (
      (Platform.OS == "android" && selectedCompetence.length == 0) ||
      (Platform.OS === "ios" && selectedCompetenceIos.length == 0)
    ) {
      Vibration.vibrate();
      setErroMessage("Selecione uma competência*");
      return setErroCompetence(true);
    } else if (valueCompany == "") {
      Vibration.vibrate();
      setErroMessage("Campo obrigatório*");
      return setErroCompany(true);
    } else if (localeClasses == "company" && valueCep == "") {
      Vibration.vibrate();
      setErroMessage("Campo obrigatório*");
      return setErroCep(true);
    } else if (localeClasses == "company" && valueCep.length < 9) {
      Vibration.vibrate();
      setErroMessage("CEP Invalido*");
      return setErroCep(true);
    } else if (
      dayDom == false &&
      daySeg == false &&
      dayTer == false &&
      dayQua == false &&
      dayQui == false &&
      daySex == false &&
      daySab == false
    ) {
      Vibration.vibrate();
      setErroMessage("Selecione um Dia*");
      return setErroDay(true);
    } else if (
      (Platform.OS == "android" && selectedPeriod.length == 0) ||
      (Platform.OS === "ios" && selectedPeriodIos.length == 0)
    ) {
      Vibration.vibrate();
      setErroMessage("Selecione um período*");
      return setErroPeriod(true);
      // Validate Dados
    } else {
      setCompletForm(true);
    }

    if (teachers.length == 0 && environment.length == 0) {
      setErroResultTitle("Não há Professores e Ambientes");
      return setErroResult(true);
    } else if (teachers.length == 0) {
      setErroResultTitle("Não há Professores");
      return setErroResult(true);
    } else if (environment.length == 0) {
      setErroResultTitle("Não há Ambientes");
      return setErroResult(true);
    } else {
      setValidateMessage(false);
      return setSearchAplic(true);
    }
  }
  // Recebe o valor das opções selecionadas
  const teachersSelected = (t) => {
    setSelectedTeachers(t);
  };

  const valueTeacherSelected = (v) => {
    setValueTeacher(v);
  };

  const environmentSelected = (e) => {
    setSelectedEnvironments(e);
  };

  const valueEnvironmentSelected = (e) => {
    setValueEnvironment(e);
  };

  // função para quando for realizar outra busca
  function otherSearchApplied() {
    // tirando os valores dos resultados pela busca
    setCompletForm(false);
    teachers.splice(0);
    environment.splice(0);
    setSelectedTeachers("");
    setSelectedEnvironments("");
    // retirando a busca
    setSearchAplic(false);
  }

  // Share result message
  const onShare = async () => {
    let messageShare = `A solicitação do ${valueCurso}, pela ${valueCompany} poderá ser marcado. Sendo assim a data é de ${valueDateInit} até ${valueDateFinal}, incluindo os dias da semana${
      dayDom == true ? " Domingo " : ""
    }${daySeg == true ? " Segunda " : ""}${dayTer == true ? " Terça " : ""}${
      dayQua == true ? " Quarta " : ""
    }${dayQui == true ? " Quinta " : ""}${daySex == true ? " Sexta " : ""}${
      daySab == true ? " Sábado " : ""
    }, no período da ${
      Platform.OS == "android" ? selectedPeriod : selectedPeriodIos
    }}.Será realizado pelo professor(a) ${selectedTeachers}, ${
      localeClasses == "company"
        ? "no endereço solicitado pela empresa cujo o CEP é " + valueCep
        : "em " + selectedEnvironments
    }`;

    const result = await Share.share({
      message: messageShare,
    });
  };

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

            {localeClasses == "company" ? (
              <View style={styles.containerOptionsCompany}>
                <View style={styles.containerFlatlistCompany}>
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
                        valueTeacher={valueTeacherSelected}
                        validStyle={valueTeacher}
                      />
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled={true}
                  />
                </View>
              </View>
            ) : (
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
                        valueTeacher={valueTeacherSelected}
                        validStyle={valueTeacher}
                      />
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled
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
                      <EnvironmentsOptionsCard
                        {...item}
                        data={item}
                        onPressEnvironment={environmentSelected}
                        valueEnvironment={valueEnvironmentSelected}
                        validStyle={valueEnvironment}
                      />
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    nestedScrollEnabled
                  />
                </View>
              </View>
            )}

            {/* Texto a ser compartilhado */}

            <View style={styles.containerText}>
              {validateMessage === false ? (
                <View style={styles.containerValidate}>
                  <ActivityIndicator color={THEME.COLORS.AZUL_500} size={30} />
                  <Text style={styles.validateMessage}>
                    Processando Mensagem
                  </Text>
                </View>
              ) : (
                <View style={styles.containerValidate}>
                  <Ionicons
                    name="checkmark-circle"
                    size={32}
                    color={THEME.COLORS.AZUL_500}
                  />
                  <Text style={styles.validateMessage}>
                    Mensagem Processada
                  </Text>
                </View>
              )}

              <Text style={styles.textResult}>
                A solicitação do{" "}
                <Text style={styles.textResultState}>{valueCurso}</Text>, pela{" "}
                <Text style={styles.textResultState}>{valueCompany}</Text>{" "}
                poderá ser marcado. Sendo assim a data é de{" "}
                <Text style={styles.textResultState}>{valueDateInit}</Text> até{" "}
                <Text style={styles.textResultState}>{valueDateFinal}</Text>,
                incluindo os dias da semana
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
                <Text style={styles.textResultState}>
                  {Platform.OS == "android"
                    ? selectedPeriod
                    : selectedPeriodIos}
                </Text>
                . Será realizado pelo professor(a){" "}
                <Text style={styles.textResultState}>
                  {selectedTeachers == ""
                    ? "Selecione um professor"
                    : selectedTeachers}
                </Text>
                ,{" "}
                {localeClasses == "company" ? (
                  <>
                    <Text style={styles.textResult}>
                      no endereço solicitado pela empresa cujo o CEP é:{" "}
                    </Text>
                    <Text style={styles.textResultState}>{valueCep}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.textResult}>em </Text>
                    <Text style={styles.textResultState}>
                      {selectedEnvironments == ""
                        ? "Selecione um ambiente"
                        : selectedEnvironments}
                    </Text>
                  </>
                )}
                .
              </Text>
            </View>
            <View style={styles.btnsSearchAplic}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => otherSearchApplied()}
              >
                <Text style={styles.textBtn}>Outra Busca</Text>
              </TouchableOpacity>
              {validateMessage === true ? (
                <TouchableOpacity style={styles.btn} onPress={() => onShare()}>
                  <Text style={styles.textBtn}>Compartilhar</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.btnDisable} disabled={true}>
                  <Text style={styles.textBtnDisable}>Compartilhar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.containerForm}>
            {/* TextInput Curso */}
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Curso</Text>
              {erroCurse ? (
                <Text style={styles.erroMessage}>{erroMessage}</Text>
              ) : (
                ""
              )}
              <TextInput
                style={styles.inputForm}
                placeholder="Digite o nome do Curso"
                value={valueCurso}
                onChangeText={(t) => setValueCurso(t)}
              />
            </View>
            {/* Select Competência */}
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Principal Competência</Text>
              {erroCompetence ? (
                <Text style={styles.erroMessage}>{erroMessage}</Text>
              ) : (
                ""
              )}

              {/* Validação para trocar o picker conforme o sistema operacional */}
              {Platform.OS === "android" ? (
                <View style={styles.selectForm}>
                  <Picker
                    selectedValue={selectedCompetence}
                    onValueChange={(itemValue, itemIndex) => {
                      console.log(
                        "Posição selecionada no Picker: " + itemIndex
                      );
                      setSelectedCompetence(itemValue);
                      setSelectedCompetenceId(
                        unidadeCurricular[itemIndex - 1].id
                      );
                      console.log("ID da competencia: " + selectedCompetenceId);
                    }}
                    mode={"dropdown"}
                  >
                    <Picker.Item
                      key={0}
                      label="Selecione a Competência"
                      value="default"
                      style={styles.itemSelect}
                    />
                    {unidadeCurricular.map((cr) => {
                      return (
                        <Picker.Item
                          key={cr.id}
                          label={cr.nome}
                          value={cr.nome}
                          style={styles.itemSelect}
                        />
                      );
                    })}
                  </Picker>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    ActionSheetIOS.showActionSheetWithOptions(
                      {
                        title: "Selecione uma opção",
                        options: ["cancelar", "LIMPAR"].concat(
                          unidadeCurricular.map((cr) => cr.nome)
                        ),
                        cancelButtonIndex: 0,
                        destructiveButtonIndex: 1,
                        userInterfaceStyle: "dark",
                      },
                      (buttonIndex) => {
                        if (buttonIndex === 0) {
                          // cancel action
                        } else if (buttonIndex === 1) {
                          setSelectedCompetenceIos(
                            "Selecione um tipo de curso"
                          );
                        } else {
                          setSelectedCompetenceIos(
                            unidadeCurricular[buttonIndex - 2].nome
                          );
                          setSelectedCompetenceId(
                            unidadeCurricular[buttonIndex - 2].id
                          );
                        }
                      }
                    )
                  }
                  style={styles.selectFormIos}
                >
                  <Text style={styles.itemSelectIos}>
                    {selectedCompetenceIos}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {/* Campo empresa */}
            <View style={styles.divForm}>
              <Text style={styles.titleForm}>Empresa</Text>
              {erroCompany ? (
                <Text style={styles.erroMessage}>{erroMessage}</Text>
              ) : (
                ""
              )}
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
                {erroCep ? (
                  <Text style={styles.erroMessage}>{erroMessage}</Text>
                ) : (
                  ""
                )}
                <TextInputMask
                  style={styles.inputForm}
                  type={"zip-code"}
                  placeholder="Digite o cep do local da empresa"
                  keyboardType="numeric"
                  value={valueCep}
                  onChangeText={(t) => setValueCep(t)}
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
              {erroDay ? (
                <Text style={styles.erroMessage}>{erroMessage}</Text>
              ) : (
                ""
              )}
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
              {erroPeriod ? (
                <Text style={styles.erroMessage}>{erroMessage}</Text>
              ) : (
                ""
              )}
              {Platform.OS == "android" ? (
                <View style={styles.selectForm}>
                  <Picker
                    selectedValue={selectedPeriod}
                    onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
                    mode={"dropdown"}
                  >
                    {periods.map((cr) => {
                      return (
                        <Picker.Item
                          key={cr}
                          label={cr}
                          value={cr}
                          style={styles.itemSelect}
                        />
                      );
                    })}
                  </Picker>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    ActionSheetIOS.showActionSheetWithOptions(
                      {
                        title: "Selecione uma opção",
                        options: ["cancelar", "LIMPAR"].concat(periods),
                        cancelButtonIndex: 0,
                        destructiveButtonIndex: 1,
                        userInterfaceStyle: "dark",
                      },
                      (buttonIndex) => {
                        if (buttonIndex === 0) {
                          // cancel action
                        } else if (buttonIndex === 1) {
                          setSelectedPeriodIos("Selecione um tipo de curso");
                        } else {
                          setSelectedPeriodIos(periods[buttonIndex - 2]);
                        }
                      }
                    )
                  }
                  style={styles.selectFormIos}
                >
                  <Text style={styles.itemSelectIos}>{selectedPeriodIos}</Text>
                </TouchableOpacity>
              )}
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

      {/* Modal de erro ao trazer o resultado */}
      {erroResult == true ? (
        <Pressable style={styles.background}>
          <Pressable style={styles.modal} onPress={() => setErroResult(true)}>
            <View style={styles.sectionModal}>
              <Ionicons
                name="close-circle"
                size={70}
                color={THEME.COLORS.ALERT}
              />
              <Text style={styles.erroTitle}>{erroResultTitle} :(</Text>
              <View style={styles.divTextModal}>
                <Text style={styles.erroText}>
                  Para mudar esse resultado você precisa alterar as datas e
                  assim achar uma forma de solicitar essa aula..
                </Text>
              </View>
            </View>
            <View style={styles.sectionButtonModal}>
              <TouchableOpacity
                style={styles.divButtonModal}
                onPress={() => setErroResult(false)}
              >
                <Text style={styles.textModalErro}>Refazer Buscar</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      ) : (
        ""
      )}
    </Background>
  );
}
