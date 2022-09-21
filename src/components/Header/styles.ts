import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: THEME.COLORS.PRIMARY,
       
      },
      containerLogo: {
        width: "100%",
        paddingTop: 10,
        paddingBottom: 0,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    
      },
      contenText: {
        width: "100%",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20
      },
      titleInitial: {
        fontSize: 35,
        fontFamily: 'Inter_800ExtraBold',
        color: '#25B5E9',
      },
      subTitle: {
        fontSize: 18,
        fontFamily: THEME.FONT_FAMILY.EXTRA_BOLD,
        color: '#3F3C3C',
        textAlign: "center",
        paddingHorizontal: 10,
      },
});