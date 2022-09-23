import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface ViewDayProps{
  dateSelected?: any;
}

export function ViewDay({dateSelected}:ViewDayProps) {
  return (
    <View style={styles.sectionDay}>
      <Text style={styles.textDay}>{dateSelected}</Text>
    </View>
  );
}