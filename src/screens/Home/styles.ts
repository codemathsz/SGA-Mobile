import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EFEFEF",
  },
  containerLogo: {
    width: "100%",
    height: "auto",
    paddingTop: 10,
    paddingBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,

  },
  contenText: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    position: "relative",
    marginTop: 40,
  },
  titleInitial: {
    fontSize: 35,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    color: '#25B5E9'
  },
  subTitle: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    color: '#3F3C3C',
    textAlign: "center",
    paddingHorizontal: 10,
  },
  sectionCalendar: {
    width: '100%',
    borderBottomRightRadius: 30,
    borderTopWidth: 2,
    borderColor: 'rgba(0,0,0,0.001)',
    backgroundColor: '#FEFEFE',
    elevation: 8,
    paddingBottom: 15,
  },
  containerRadios:{
    width: '100%',
    marginTop: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  containerRadio:{
    flexDirection: 'row',
  },
  textRadioOne: {
    paddingTop: 6,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.BLACK
  },
  textRadioTwo: {
    paddingTop: 6,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_400
  },
  textRadioThree: {
    paddingTop: 6,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_500
  },
  textRadioFour: {
    paddingTop: 6,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_600
  },
  sectionCentralization: {
    width: '100%',
    alignItems: 'center',
  },
  containerSearch:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:50,
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
});
