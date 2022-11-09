import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import ProfessorFoto from '../../assets/foto_chile.png'
import { THEME } from '../../themes';

import { useNavigation } from '@react-navigation/native';
import { Teachers } from '../../screens/Teachers';

import photoProfile from '../../assets/photoprofile.png'

interface Props {
    data: Teachers
}


export function ProfessoresCard({ data }: Props) {

    const navigation = useNavigation();

    function goProfileTeacher(){
        navigation.navigate("ProfileTeacher" as never, {data} as never)
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.card}
                onPress={goProfileTeacher}
            >
                <View style={styles.contentMain}>
                    <View>
                        <Image
                            source={data.foto == null ? photoProfile : {uri:  data?.foto }}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 12
                            }}
                        />
                    </View>
                    <View style={styles.infoPerson}>
                        <Text
                            style={{
                                fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
                            }}
                        >{data.nome}</Text>
                        <Text
                            style={{

                            }}
                        >Carga Semanal: {data.cargaSemanal}Hrs </Text>
                    </View>
                </View>
                <View style={styles.contentDisponobilidade}>
                    <TouchableOpacity style={styles.disponobilidade} >
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
                    ></Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}