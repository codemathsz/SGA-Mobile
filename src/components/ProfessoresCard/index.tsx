import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import ProfessorFoto from '../../assets/foto_chile.png'
import { THEME } from '../../themes';
import { useNavigation } from '@react-navigation/native';

export interface ProfessoresCardProps{
    id: string,
    name: string,
    cargaHoraria: string
    habilidade: string
    status: string

}

interface Props{
    data: ProfessoresCardProps
}


export function ProfessoresCard({data, ...rest}:Props) {

    const navigation = useNavigation();
  return (
    <View style={styles.container} {...rest}>
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
                        >{data.name}</Text>
                        <Text 
                            style={{

                            }}
                        >Carga Horária:{data.cargaHoraria} </Text>
                    </View>
                </View>
                <View style={styles.contentSkills}>
                    <TouchableOpacity style={styles.skill} >
                        <Text
                            style={{
                                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
                            }}
                        >{data.habilidade}</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD
                        }}
                    >{data.status}</Text>
                </View>
            </TouchableOpacity>
    </View>
  );
}