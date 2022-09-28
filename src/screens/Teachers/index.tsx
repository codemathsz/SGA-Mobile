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


import Icon from '../../assets/icon_curso.png'

import { styles } from './styles';

import API from '../../services/api'

export interface Professores{
  id: string,
  nome: string,
  cargaSemanal: string
  competencia: []
  ativo: boolean
  email: string

}

export function Teachers() {

  const [showModal, setShowModal] = useState(false)
  const [professor, setProfessor] = useState<Professores[]>([])

  async function getProfessorDidMount() {
    const response = await API.get('/api/professor')
    setProfessor(response.data)
  }

  useEffect(() =>{
    getProfessorDidMount()
  },[])


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
                  <View style={styles.contentFilter}>
                    <TextInput style={styles.input} placeholder='Selecione um professor' />
                    <TouchableOpacity style={styles.containerImg}>
                      <Image
                        source={Icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentFilter}>
                    <TextInput style={styles.input} placeholder='Selecione um periodo' />
                    <TouchableOpacity style={styles.containerImg}>
                      <Image
                        source={Icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentFilter}>
                    <TextInput style={styles.input} placeholder='Data inicio...' />
                    <TouchableOpacity style={styles.containerImg}>
                      <Image
                        source={Icon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentFilter}>
                    <TextInput style={styles.input} placeholder='Data final...' />
                    <TouchableOpacity style={styles.containerImg}>
                      <Image
                        source={Icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => setShowModal(false)}>
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