import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT
  },
  subtitle: {
    fontSize: 13,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT_OPACIT
  },
});