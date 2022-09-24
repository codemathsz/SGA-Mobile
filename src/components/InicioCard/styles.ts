import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
 card:{
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop:20,
    marginBottom:20,
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
    backgroundColor: THEME.COLORS.WHITE,
   
 },
  header:{
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.AZUL_500,
    alignItems: 'center',
    borderTopRightRadius:14,
    borderTopLeftRadius:14,
    paddingLeft:40,
    paddingRight:4
  },
  containerManha:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:6,
    marginBottom:6,
  },
  containerTarde:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:6,
    marginBottom:6,
  },
  containerNoite:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:6,
    marginBottom:6,
  },
});