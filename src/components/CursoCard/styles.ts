import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  content:{
    width: '94%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.WHITE,
    marginTop:10,
    marginBottom:20,
    borderRadius:15,
    
  },
  informations:{
    width:'80%',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',

  },
  contentText:{
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  txtName:{
    fontSize: 16,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textTransform: 'uppercase'
  },
  txtCH:{
    fontSize:12,
  },
  typeCourse:{
    width:50,
    alignItems: 'center',
    marginRight:6,
    marginTop:6,
    backgroundColor: THEME.COLORS.AZUL_300,
    borderRadius:16,
  },
  txtType:{
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.TEXT,
    
  },
  
});