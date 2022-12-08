import React, { useState } from "react";
import {
  View,
  TouchableOpacityProps,
  Text,
  TouchableOpacity,
} from "react-native";
import { Aula } from "../../screens/Home";

import { THEME } from "../../themes";

import { styles } from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";



interface Props extends TouchableOpacityProps {
  data: Aula;
  
  sendsId: any;
  valuePeriod: string;
}
export function InicioCard({ data, sendsId, valuePeriod }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [teste, setTeste] = useState([]);

  function validModal(id) {
    if (showModal == true) {

    } else {
      sendsId(id)
    }
  }

  return (
    <View style={styles.container} key={data.ambiente.id}>
      <View style={styles.titleEnvironment}>
        <Text
          style={{
            fontFamily: THEME.FONT_FAMILY.BOLD,
            fontSize: THEME.FONT_SIZE.LG,
            color: THEME.COLORS.AZUL_500,
          }}
        >
          {data.ambiente.nome}
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.containerHeaderLeft}>
            <Text style={styles.textSubTitleHeader}>Periodo</Text>
          </View>
          <View style={styles.containerHeaderRight}>
            <Text style={styles.textSubTitleHeader}>Aula</Text>
          </View>
          <View style={styles.containerHeaderRight}>
            <Text style={styles.textSubTitleHeader}>Professor</Text>
          </View>
        </View>
        {
          <View style={styles.containerPeriods}>

            {
              data.aulas.length > 0 ? (
                data.aulas.map((aula) => {

                  return (

                    valuePeriod === 'all' ? (
                      aula.periodo === 'MANHA' ? (

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Manha */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="sunny" size={30} color={'#F2CB05'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>

                      ) : aula.periodo === 'TARDE' ? (

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Tarde */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="partly-sunny" size={30} color={'#A6A6A6'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textClass} numberOfLines={1}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textClass} numberOfLines={1}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>

                      ) : aula.periodo === 'NOITE' ? (

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Noite */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="moon" size={30} color={'#11233E'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>
                      ) :
                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Noite */}
                          <View style={styles.containerPeriodLeft}>
                            <Text>INTEGRAL</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textAvailableClass}>Ambiente</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textAvailableClass}>Disponível</Text>
                          </View>
                        </TouchableOpacity>


                    ) : valuePeriod === 'morning' ? (

                      aula.periodo === 'MANHA' && (

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Manha */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="sunny" size={30} color={'#F2CB05'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>
                      )
                    ) : valuePeriod === 'afternoon' ? (
                      aula.periodo === 'TARDE' &&(

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Tarde */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="partly-sunny" size={30} color={'#A6A6A6'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textClass} numberOfLines={1}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text style={styles.textClass} numberOfLines={1}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>

                      )
                    ) : (
                      aula.periodo === 'NOITE' && (

                        <TouchableOpacity style={styles.containerPeriod} onPress={() => validModal(aula.id)} key={aula.id}>
                          {/* Noite */}
                          <View style={styles.containerPeriodLeft}>
                            <Ionicons name="moon" size={30} color={'#11233E'} />
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.unidadeCurricular.nome}</Text>
                          </View>
                          <View style={styles.containerPeriodRight}>
                            <Text numberOfLines={1} style={styles.textClass}>{aula.professor.nome}</Text>
                          </View>
                        </TouchableOpacity>
                      )
                    )
                  )
                })
              ) : (
                <TouchableOpacity style={styles.containerPeriod}>
                  {/* Noite */}
                  <View style={styles.containerPeriodLeft}>
                    <Ionicons name="information-circle-sharp" size={30} color={'#11233E'} />
                  </View>
                  <View style={styles.containerPeriodRight}>
                    <Text style={styles.textAvailableClass}>Ambiente</Text>
                  </View>
                  <View style={styles.containerPeriodRight}>
                    <Text style={styles.textAvailableClass}>Disponível</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          </View>
        }
      </View>
    </View>
  );
}