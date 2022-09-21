import { 
  View,
  Text, 
  Pressable, 
  Keyboard,
  FlatList 
} from 'react-native';
import { Background } from '../../components/Background';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';

import { styles } from './styles';

export function Courses() {



  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Background>
        <Header title='Cursos' subTitle='Consulte por cursos'/>
        <View style={styles.containerSearch}>
          <Search  placeholder='Buscar Cursos'/>
          <Filter/>
        </View>
        {/*    <FlatList
              data={list}
            >

            </FlatList> */}
      </Background>
    </Pressable>
  );
}