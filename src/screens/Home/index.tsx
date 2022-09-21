import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['br'] = {
  monthName: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'agosto'],

}
LocaleConfig.defaultLocale='br'

import { styles } from './styles';

import { 
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black 
} from '@expo-google-fonts/inter';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import Soon from '../../assets/Soon.png'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Filter } from '../../components/Filter';

interface HomeProps{
    
}
export function Home() {

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
      Inter_900Black 
    })
  
    if (!fontsLoaded) {
      return <AppLoading/>;
    }
  
  
  return (
   <Background>
     <Header title='Bem Vindo' subTitle='Selecione um dia e veja as ocupações dos ambientes'/>
     <Calendar

      // Para estilização do calendário
      style={{
        borderBottomRightRadius: 10,
        height: 'auto',
        
      }}
      theme={{
        backgroundColor: '#FCFCFD',
        calendarBackground: '#FCFCFD',
        textSectionTitleColor: '#1E1E40',
        textSectionTitleDisabledColor: 'rgb(17, 17, 17, 0.2)',
        selectedDayBackgroundColor: '#25B5E9',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#25B5E9',
        dayTextColor: '#1E1E40',
        textDisabledColor: 'rgba(17, 17, 17, 0.2)',
        dotColor: '#111',
        selectedDotColor: '#25B5E9',
        arrowColor: '#1E1E40',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: '#1E1E40',
        indicatorColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: 'bold',
        textDayFontSize: 16,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 15
      }}

      // config gerais do calendário
      initialDate={'2022-09-20'}
      minDate={'2022-09-20'}

      enableSwipeMonths={true}

      // Props para os dias do calendário
      // dayComponent={}

      // Props para o dia selecionado
      // onDayPress={(e) => {

      // }}


     />
      <View style={styles.containerSearch}>
        <Search  placeholder='Pesquisar...'/>
        <Filter/>
      </View>
   </Background>
  );
}