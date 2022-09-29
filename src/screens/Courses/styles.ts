import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },  
  containerSearch:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list:{
    width: '100%',
    marginTop:15,
    paddingTop:20,

  },
  btnModal:{
    width: 48,
    height: 48,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: {width: 2, height: -8},  
    shadowColor: '#000',  
    shadowOpacity: 0.7,  
    shadowRadius: 3,  
    elevation: 10,
  },
  background:{
    backgroundColor: 'rgba(190,190,190,0.6)',
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal:{
    width:'80%',
    height: 300,
    position: 'absolute',
    zIndex: 1001,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding:4,
    borderRadius: 20,
  },
  close:{
    position: 'absolute',
    right:4,
    top: 2
  },
  txtClose:{
    fontSize: 24,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD
  },
  vwTitle:{
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding:20,
    paddingBottom:10,
    borderBottomColor: THEME.COLORS.AZUL_500,
    borderBottomWidth: 2,
  },
  title:{
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    color: THEME.COLORS.AZUL_500,
  },
  containerFilter:{
    width: '90%',
    borderColor: THEME.COLORS.SELECT,
    borderWidth: 0.8,
    borderRadius: 12,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50,
    
  },
  datePicker:{
    width: '90%',
    borderColor: '#000',
    borderWidth: 4,
    color: THEME.COLORS.SELECT,
  },

  itemDatePicker:{
    borderColor: '#000',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT
 },

  input:{
    backgroundColor: THEME.COLORS.WHITE,
    width: '70%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: {width: 2, height: -2},  
    shadowColor: '#000',  
    shadowOpacity: 0.7,  
    shadowRadius: 3,  
    elevation: 4,
    padding:2,
    borderRadius:8,
    textAlign: 'center'
  },
  containerImg:{
    width: 40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: {width: 2, height: 2},  
    shadowColor: '#000',  
    shadowOpacity: 0.7,  
    shadowRadius: 3,  
    elevation: 5,
    borderRadius:8,
  },
  button:{
    width: '50%',
    height:40,
    backgroundColor: THEME.COLORS.AZUL_500,
    position: 'absolute',
    bottom: '10%',
    borderRadius:8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  txtButton:{
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
  }
});