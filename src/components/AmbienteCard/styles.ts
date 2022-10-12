import { Platform, StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === 'ios' ? 14 : 20,
  },
  content: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.WHITE,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 15,
    padding: 20,
  },
  informations: {
    width: '70%',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'space-around',

  },
  contentText: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  txtName: {
    fontSize: Platform.OS === 'ios' ? 22 : 18,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textTransform: "uppercase",
  },
  texts:{
    fontSize: Platform.OS === 'ios' ? 18 : 16
  },
  status: {
    position: 'absolute',
    top:0,
    right: 0,
    width: Platform.OS === 'ios' ? 100 : 80,
    height:20,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.AZUL_300,
    borderRadius: 20,
  },
  txtType: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
    fontSize: Platform.OS === 'ios' ? 20 : 14,
  },
});
