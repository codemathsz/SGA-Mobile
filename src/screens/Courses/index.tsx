import { 
  View,
  Text, 
  Pressable, 
  Keyboard,
  FlatList 
} from 'react-native';
import { Background } from '../../components/Background';
import { CursoCard } from '../../components/CursoCard';
import { Filter } from '../../components/Filter';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { CURSOS } from '../../utils/cursos';

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
          <Filter
            
          />
        </View>
        <FlatList
              data={CURSOS}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <CursoCard
                  data={item}
                />
              )}
              horizontal={false}
              showsVerticalScrollIndicator
              style={styles.list}
            >

          </FlatList> 
      </Background>
    </Pressable>
  );
}

function ModalCourse(){
  return(
    <View style={styles.modal}>
      <Text>Olá modal!</Text>
    </View>
  )
}