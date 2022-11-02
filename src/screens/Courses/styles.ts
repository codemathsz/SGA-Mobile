import { Platform, StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  containerSearch: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  list: {
    width: '100%',
    marginTop: 15,
    paddingTop: 20,

  },
  btnModalANDROID: {
    width: 48,
    height: 48,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: { width: 2, height: -8 },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 10,
  },
  btnModalIOS: {
    width: 48,
    height: 48,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  background: {
    backgroundColor: 'rgba(190,190,190,0.6)',
    position: 'absolute',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: '80%',
    height: 300,
    position: 'absolute',
    zIndex: 1002,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
  },
  modalHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    backgroundColor: THEME.COLORS.AZUL_500,
    borderRadius: 8,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },
  close: {
    marginRight: 10
  },
  txtClose: {
    fontSize: 20,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.WHITE
  },
  vwTitle: {

    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
    color: THEME.COLORS.WHITE,
  },
  containerFilter: {
    width: '90%',
    borderColor: THEME.COLORS.SELECT,
    borderWidth: Platform.OS === 'ios' ? 0 : 2,
    borderRadius: Platform.OS === 'ios' ? 0 : 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 80 : 60,
  },
  datePickerANDROID: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 4,
    color: THEME.COLORS.SELECT,
  },
  itemDatePicker: {
    borderColor: '#000',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT
  },
  input: {
    width: '80%',
    paddingVertical: 12,
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

    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  containerImg: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 8,
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: THEME.COLORS.AZUL_500,
    position: 'absolute',
    bottom: '10%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  txtButton: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase',
  }
});