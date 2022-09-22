import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import ProfessorFoto from '../../assets/foto_chile.png'

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
  return (
    <View style={styles.container} {...rest}>
         <TouchableOpacity  >
                <View >
                   <Image
                        source={ProfessorFoto}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12
                        }}
                    /> 
                    <View >
                        <Text >{data.name}</Text>
                        <View>
                            <Text >Capacidade: </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity >
                        <Text>{data.status}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
    </View>
  );
}