import { StyleSheet } from 'react-native';
import { THEME } from '../../themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
      },
      card:{
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: THEME.COLORS.WHITE,
        marginTop:10,
        marginBottom:20,
        borderRadius:15,
      },
      contentMain:{
        width:'70%',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-around',
      },
      infoPerson:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      }, 
      contentSkills:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      skill:{
        width:120,
        position: 'relative',
        backgroundColor: THEME.COLORS.AZUL_300,
        padding:2,
        marginRight: 2,
        marginTop:8,
        borderRadius:2,
        alignItems: 'center',

      }

});