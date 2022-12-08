import { StyleSheet } from "react-native";
/* import { Keyframe } from "react-native-reanimated"; */
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
  containerRadios: {
    width: '100%',
    marginTop: 25,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  containerRadio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textRadioOne: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.BLACK
  },
  textRadioTwo: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_400
  },
  textRadioThree: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_500
  },
  textRadioFour: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.AZUL_600
  },
  sectionCentralization: {
    width: '100%',
    alignItems: 'center',
  },
  containerSearch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  btnModalANDROID: {
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
    shadowOffset: { width: 2, height: -8 },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 10,
  },
  btnModalIOS: {
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
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  containerLista: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgDate: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listaAulas: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyListStyle: {
    padding: 10,
    alignItems: 'center',
    fontSize: 22,
    textAlign: 'center',
    color: THEME.COLORS.SELECT,
  },
  containerLessons: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  titleEnvironment: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 12,
  },
  card: {
    width: "97%",
    alignItems: "center",
    backgroundColor: THEME.COLORS.BACKGROUND_FORM,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  header: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.AZUL_500,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  containerHeaderLeft: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  containerHeaderRight: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textSubTitleHeader: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 16,
    color: THEME.COLORS.WHITE,
  },
  containerPeriods: {
    width: "100%",
    flexDirection: "column",
  },
  containerPeriod: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderWidth: 0.2,
    borderColor: THEME.COLORS.CAPTION_300,

  },
  containerPeriodLeft: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
  containerPeriodRight: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textClass: {
    fontFamily: THEME.FONT_FAMILY.BOLD,

  },
  textAvailableClass: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 16,
    color: THEME.COLORS.AZUL_500_DISABLED,
  },
});
/* 
export const load = new Keyframe({
  0:{
    opacity: 0,
    transform:  [{scale: 1},{rotate: '0deg'}],
  },
  20:{
    opacity: 1,
    transform: [{scale: 1},{rotate: '360deg'}],
  },
  100:{
    transform:  [{scale: 1},{rotate: '360deg'}],
    opacity: 0,
  },
}) */