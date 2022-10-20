import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface Props{
  title: string;
  subtitle: string
}

export function FlatSearchAvanced({title, subtitle}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}