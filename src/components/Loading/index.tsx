import { View, ActivityIndicator } from 'react-native';
import { THEME } from '../../themes';

import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator  color={THEME.COLORS.AZUL_300} size={70} />
    </View>
  );
}
// ActivityIndicator conponente para sinalizar o processo de loading