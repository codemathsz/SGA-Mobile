import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  contentModal: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1005,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(190,190,190,0.6)",
  },
  modal: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  closeModal: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: 18,
    color: "#fff",
  },
  headerModal: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.AZUL_500,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleHeaderModal: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: "#fff",
  },
  containerInfo: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  containerInfoModal:{
    width:'100%',
    paddingVertical: 20,
    alignItems:'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  contentInfosModal: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 8
  },
  titleInfoLesson: {
    textTransform: "uppercase",
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 14,
  },
  textEnviroment: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});
