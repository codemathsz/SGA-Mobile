import { StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  containerForm: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderTopStartRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: THEME.COLORS.BACKGROUND_FORM,
    elevation: 10,
  },
  divForm: {
    paddingBottom: 5,
    marginVertical: 5,
  },
  titleForm: {
    paddingLeft: 15,
    color: THEME.COLORS.TITLE_FORM,
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
  },
  inputForm: {
    marginTop: 5,
    paddingVertical: 12,
    paddingLeft: 15,
    borderRadius: 8,
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    backgroundColor: THEME.COLORS.WHITE,
    shadowColor: THEME.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  selectForm: {
    marginTop: 5,
    paddingVertical: 1,
    paddingLeft: 10,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.WHITE,
    shadowColor: THEME.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  itemSelect: {
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    fontWeight: "800",
  },
  containerRadio: {
    paddingTop: 10,
    flexDirection: "row",
  },
  divRadio: {
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  titleRadio: {
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  containerDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  divDays: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50 / 2,
    backgroundColor: THEME.COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  daySelected: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50 / 2,
    backgroundColor: THEME.COLORS.AZUL_300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textDay: {
    fontSize: 12,
    color: THEME.COLORS.TEXT_BLUE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  textDaySelected: {
    fontSize: 12,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  divDate: {
    width: "100%",
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    paddingLeft: 15,
    borderRadius: 8,
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    backgroundColor: THEME.COLORS.WHITE,
    shadowColor: THEME.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  divCalendar: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textDate: {
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
  },
  containerSearch:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.AZUL_500,
  },
  textBtn:{
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  containerOptions:{
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    marginVertical: 8,
    justifyContent:"space-between", 
  },
  containerFlatlist:{
    height: 215
  },
  listResults:{
    width: "100%",
  },
  containerText:{
    marginTop: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent:"center",
  },
  textResult:{
    textAlign: "center",
    fontSize: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  textResultState:{
    color: THEME.COLORS.AZUL_300
  },
  btnsSearchAplic:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  }
});
