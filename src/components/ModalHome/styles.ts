import { StyleSheet } from "react-native";
import { THEME } from "../../themes";

export const styles = StyleSheet.create({
  contentModal: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1005,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(190,190,190,0.6)',
  },
  modal: {
    width: '80%',
    height: '60%',
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center'
  },
  closeModal: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: '#fff'
  },
  headerModal: {
    width: '100%',
    height: 'auto',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.AZUL_500,
    borderRadius: 8,
  },
  titleHeaderModal: {
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: '#fff'
  },
  contentInformationsLesson: {

  },

  contentInfosModal: {
    width: '90%',

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  titleInfoLesson: {
    textTransform: 'uppercase',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: 14,
  },
  textEnviroment: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  }
});