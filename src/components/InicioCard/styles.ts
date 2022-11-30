import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  containerA: {
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
