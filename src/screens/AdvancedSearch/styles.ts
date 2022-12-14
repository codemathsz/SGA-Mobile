import { Platform, StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  containerForm: {
    height: "100%",
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

  selectFormIos: {
    marginTop: 5,
    paddingVertical: 14,
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

  itemSelectIos: {
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
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
  divDateIOS: {
    width: "100%",
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
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
  containerSearch: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.AZUL_500,
  },
  textBtn: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  btnDisable: {
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.AZUL_500_DISABLED,
  },
  textBtnDisable: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  containerOptions: {
    width: "100%",
    marginTop: 10,
    marginBottom: 2,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerOptionsCompany: {
    width: "100%",
    marginTop: 8,
    marginBottom: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  containerFlatlist: {
    height: 215,
  },
  containerFlatlistCompany: {
    width: "90%",
    height: 215,
    justifyContent: "center",
  },
  optionsFlatlist: {
    height: 215,
  },
  containerText: {
    marginTop: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  textResult: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  textResultState: {
    color: THEME.COLORS.AZUL_300,
  },
  btnsSearchAplic: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  erroMessage: {
    paddingLeft: 15,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.ALERT,
  },
  containerValidate: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
  },
  validateMessage: {
    fontSize: 22,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.AZUL_500,
  },
  background: {
    backgroundColor: "rgba(190,190,190,0.6)",
    position: "absolute",
    zIndex: 1000,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "85%",
    paddingTop: 20,
    position: "absolute",
    zIndex: 1002,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  sectionModal: {
    alignItems: "center",
  },
  erroTitle: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  divTextModal: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  erroText: {
    textAlign: "center",
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  sectionButtonModal: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 12,
    borderColor: THEME.COLORS.TEXT_OPACIT,
    borderTopWidth: 0.6,
  },
  divButtonModal: {
    alignItems: "center",
  },
  textModalErro: {
    fontSize: 16,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT_OPACIT,
  },
});
