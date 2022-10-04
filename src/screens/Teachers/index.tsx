import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  Pressable,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { Background } from '../../components/Background';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { ProfessoresCard } from '../../components/ProfessoresCard';
import { Search } from '../../components/Search';

import { Picker } from "@react-native-picker/picker";

import Icon from '../../assets/icon_curso.png'

import { styles } from './styles';

import API from '../../services/api'

export interface Teachers {
  id: string,
  nome: string,
  cargaSemanal: string
  competencia: []
  ativo: boolean
  email: string

}

export interface Course {
  id: string;
  nome: string;
  tipoCurso: string;
  ativo: string;
  unidadeCurricular: [];
}

export interface CurricularUnit {
  nome: string
  cargaHoraria: string
}

export function Teachers() {

  // para modal
  const [showModal, setShowModal] = useState(false)
  // receber o get de professor
  const [professor, setProfessor] = useState<Teachers[]>([])
  // curso para colocar no select
  const [course, setCourses] = useState<Course[]>([]);
  // para guardar o que foi selecionado no select curso
  const [selectCourses, setSelectCourses] = useState([]);
  // unidade curricular para colocar no select
  const [curricularUnit, setCurricularUnit] = useState<CurricularUnit[]>([])
  // para guardar o que foi selecionado no select unid. curricular
  const [selectCurricularUnit, setSelectCurricularUnit] = useState([]);

  async function getProfessorDidMount() {
    const response = await API.get('/api/professor')
    setProfessor(response.data)
  }

  async function getCoursesDidMount() {
    const response = await API.get('/api/curso')
    setCourses(response.data)
  }

  async function getCurricularUnitDidMount() {
    const response = await API.get('/api/unidade')
    setCurricularUnit(response.data)
  }

  useEffect(() => {
    getProfessorDidMount()
    getCoursesDidMount()
    getCurricularUnitDidMount()
  }, [])


  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Background>
        <Header title='Professores' subTitle='Consulte os professores' />
        <View style={styles.containerSearch}>
          <Search placeholder='Busca professor' />
          <TouchableOpacity style={styles.btnModal} onPress={() => setShowModal(true)}>
            <Filter />
          </TouchableOpacity>
        </View>
        <FlatList
          data={professor}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProfessoresCard
              data={item}
            />
          )}
          horizontal={false}
          showsVerticalScrollIndicator
          style={styles.list}
        />
        {
          showModal == true ?
            <View style={styles.background}>
              <View style={styles.modal}>
                <View style={styles.vwTitle}>
                  <Text style={styles.title} >Filtragem  Professores</Text>
                </View>
                <View style={styles.containerFilter}>
                  <Picker
                    selectedValue={selectCourses}
                    style={styles.datePicker}
                    onValueChange={(itemValue) => setSelectCourses(itemValue)}
                    mode={"dropdown"}
                    
                  >
                    {course?.map((cr) => {
                      return (
                        <Picker.Item
                          label={cr.nome}
                          value={cr.nome}
                          style={styles.itemDatePicker}
                        />
                      );
                    })}
                  </Picker>
                </View>
                <View style={styles.containerFilter}>
                  <Picker
                    selectedValue={selectCurricularUnit}
                    style={styles.datePicker}
                    onValueChange={(itemValue) => setSelectCourses(itemValue)}
                    mode={"dropdown"}
                  >
                    {curricularUnit?.map((cru) => {
                      return (
                        <Picker.Item
                          label={cru.nome}
                          value={cru.nome}
                          style={styles.itemDatePicker}
                        />
                      );
                    })}
                  </Picker>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.txtButton}>Buscar</Text>
                </TouchableOpacity>
              </View>
            </View>
            : ''
        }
      </Background>
    </Pressable>
  );
}