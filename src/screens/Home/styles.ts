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
    fontFamily: 'Inter_800ExtraBold',
    color: '#25B5E9'
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Inter_800ExtraBold',
    color: '#3F3C3C',
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
