import React from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

// para fazer os gradient nos textos
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

interface HeaderProps {
  title: string;
  subTitle: string;
}
export function Header({ title, subTitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contenText}>
        <MaskedView maskElement={<Text style={[styles.titleInitial, { backgroundColor: 'transparent' }]}>{title}</Text>}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#25B5E9', '#367FBF']}
          >
            <Text style={[styles.titleInitial, { opacity: 0 }]}>{title}</Text>
          </LinearGradient>
        </MaskedView>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}