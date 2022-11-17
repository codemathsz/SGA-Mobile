import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: THEME.COLORS.WHITE,

  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.AZUL_500,
    alignItems: 'center',
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
  },
  titleHeader:{
    width: '100%',
    height: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleHeader:{
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    
  },
  containerPeriodos: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  
 
});