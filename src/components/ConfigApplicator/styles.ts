import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerDone: {
    width: '46%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }, 
  text: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  touchableOpacity: {
    backgroundColor: THEME.COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    elevation: 2,
  },
  textBtn: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
});