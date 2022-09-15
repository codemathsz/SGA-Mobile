import React from 'react';
import { View, StyleSheet } from 'react-native';
/* import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper'; */
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';



interface DrawerContentProps {

}

function DrawerContent(props:DrawerContentProps) {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View >
          <View >
            
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

/* Estilização para os texto da Navbar */
const styles = StyleSheet.create({
  userInfoSection:{

  },
  drawerContent: {

  },
})

export default DrawerContent;