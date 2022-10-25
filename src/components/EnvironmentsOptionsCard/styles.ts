import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
  containerInfo: {
    marginVertical: 5,
    paddingVertical: 2,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  containerInfoSelect: {
    marginVertical: 5,
    paddingVertical: 2,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.AZUL_300,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.TEXT,
  },
  textSelect: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
  },
});
