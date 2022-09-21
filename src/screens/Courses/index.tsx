import { 
  View,
  Text, 
  Pressable, 
  Keyboard,
  FlatList 
} from 'react-native';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';

import { styles } from './styles';

interface CoursesProps{
  list:[]
}


export function Courses({list}:CoursesProps) {



  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <Header title='Cursos' subTitle='Consulte por cursos'/>
      <View style={styles.containerSearch}>
        <Search  placeholder='Buscar Cursos'/>
        <Filter/>
      </View>
   {/*    <FlatList
        data={list}
      >

      </FlatList> */}
    </Pressable>
  );
}