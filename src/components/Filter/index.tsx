import React from 'react';
import { View, TouchableOpacity , Image} from 'react-native';

import { styles } from './styles';
import IconFilter from '../../assets/icon_filter.png'
export function Filter() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                source={IconFilter}
                style={{width: 20, height: 20}}
            />
        </TouchableOpacity>
    </View>
  );
}