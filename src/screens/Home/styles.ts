import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
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
    backgroundColor: '#FCFCFD',
    elevation: 8,
    paddingBottom: 15,
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
  }
});
