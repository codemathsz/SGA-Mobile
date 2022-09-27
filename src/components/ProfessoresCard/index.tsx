import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import ProfessorFoto from '../../assets/foto_chile.png'
import { THEME } from '../../themes';
import { useNavigation } from '@react-navigation/native';
import { Professores } from '../../screens/Teachers';



interface Props{
    data: Professores
}


export function ProfessoresCard({data}:Props) {

    const navigation = useNavigation();
  return (
    <View style={styles.container} >
         <TouchableOpacity  
            style={styles.card} 
            onPress={() => navigation.navigate("Profile")}
            >
                <View style={styles.contentMain}>
                   <Image
                        source={ProfessorFoto}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12
                        }}
                    /> 
                    <View style={styles.infoPerson}>
                        <Text 
                            style={{
                                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
                            }}
                        >{data.nome}</Text>
                        <Text 
                            style={{

                            }}
                        >Carga Semanal:{data.cargaSemanal} </Text>
                    </View>
                </View>
                <View style={styles.contentSkills}>
                    <TouchableOpacity style={styles.skill} >
                        <Text
                            style={{
                                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
                                color: THEME.COLORS.WHITE
                            }}
                        >Disponivel</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD
                        }}
                    >{data.id}</Text>
                </View>
            </TouchableOpacity>
    </View>
  );
}