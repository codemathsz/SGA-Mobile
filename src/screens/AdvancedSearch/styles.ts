import { StyleSheet } from "react-native";
import { shadow } from "react-native-paper";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {},
  containerForm: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingTop: 25,
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
  itemSelect:{
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    fontWeight: '800'
  },
  containerRadio:{
    paddingTop: 10,
    flexDirection: 'row',
  },
  divRadio: {
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleRadio: {
    color: THEME.COLORS.TEXT_PLACE,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});
