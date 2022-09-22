import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

import IconCurso from '../../assets/icon_curso.png'

export interface AmbienteCardProps {
    id: string
    name: string
    capacidade: string
    docente: string
    status: string
}

interface Props extends TouchableOpacityProps {
    data: AmbienteCardProps
}
export function AmbienteCard({ data, ...rest }: Props) {
    return (
        <View style={styles.container} {...rest}>
            <TouchableOpacity style={styles.content} >
                <View style={styles.informations}>
                    <Image
                        source={IconCurso}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 12
                        }}
                    />
                    <View style={styles.contentTexts}>
                        <Text style={styles.txtName}>{data.name}</Text>
                        <View>
                            <Text >Capacidade: {data.capacidade}</Text>
                            {
                                data.status === "OCUPADA" ?
                                    <Text>Professor: {data.docente}</Text>
                                    : ''
                            }
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.status}>
                        <Text style={styles.txtType}>{data.status}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}