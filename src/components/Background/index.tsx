import { ImageBackground, View , Pressable, Keyboard} from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props{
    children: React.ReactNode;
}

export function Background({children}: Props) {
  return (
    <Pressable style={styles.container}
      onPress={Keyboard.dismiss}
    >
      {children}
    </Pressable>
  );
}