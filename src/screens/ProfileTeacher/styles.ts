import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginTop: 80,// por enquanto
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentPhoto:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  nameTeacher:{
    marginTop: 20,

  },
  name:{
    fontFamily:THEME.FONT_FAMILY.EXTRA_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
  },
  calendarANDROID:{
    width: '100%',
    height: 'auto',
    backgroundColor: THEME.COLORS.WHITE,
    marginTop:80,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    shadowOffset: {width: 80, height: -8},  
    shadowColor: '#000',  
    shadowOpacity: 0.4,  
    shadowRadius: 3,  
    elevation: 10,
    flexDirection: 'column'
  },
  calendarIOS:{
    width: '100%',
    height: 'auto',
    backgroundColor: THEME.COLORS.WHITE,
    marginTop:80,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    shadowOffset: { width: 2, height: -4 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3, 
    elevation: 10,
    flexDirection: 'column'
  },
  contentSubTitleCalendar:{
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subTitleCalendar:{
    width: '33%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  containerListANDROID:{
    width: '90%',
    height:100,
    backgroundColor: THEME.COLORS.WHITE, 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderLeftWidth: 20,
    borderLeftColor: '#734BA7',
    marginTop:20,
    marginBottom:20,
    flexDirection: 'column',
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    shadowOffset: { width: 2, height: -4 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3, 
    elevation: 10,
  },
  containerListIOS:{
    width: '90%',
    height:100,
    backgroundColor: THEME.COLORS.WHITE, 
    justifyContent: 'space-around',
    alignItems: 'center',
    borderLeftWidth: 20,
    borderLeftColor: '#734BA7',
    marginTop:20,
    marginBottom:20,
    flexDirection: 'column',
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
    shadowOffset: {width: 2, height: -8},  
    shadowColor: '#000',  
    shadowOpacity: 0.7,  
    shadowRadius: 3,  
    elevation: 4,
  },
  item:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    alignItems: 'center'
  }
});