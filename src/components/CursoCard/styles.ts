import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.WHITE,
    marginTop:10,
    marginBottom:20,
    paddingHorizontal: 5,
    borderRadius:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  informations:{
    width:'70%',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',

  },
  contentText:{
    width: '70%',
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
    width:115,
    
    alignItems: 'center',
    marginRight:8,
    marginTop:8,
    backgroundColor: THEME.COLORS.AZUL_300,
    borderRadius:14,
  },
  txtType:{
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 5,
    
  },
  
});