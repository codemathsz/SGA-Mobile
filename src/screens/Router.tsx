import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";


import { Home } from './Home'
import { Courses } from './Courses';
import { Environments } from './Environments';
import { Teachers } from './Teachers';

import {TouchableOpacity, View} from 'react-native'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()



function DrawerNavigator() {

  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false, 
        headerTitle:'', 
        headerTransparent: true, 
        drawerPosition:'right', 
        
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home}
       options={{
        
       }}
      />
      <Drawer.Screen name="Courses" component={Courses} />
      <Drawer.Screen name="Environments" component={Environments} />
 
    </Drawer.Navigator>
  )
}
export function Router() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Teachers" component={Teachers} />
    </Stack.Navigator>
  );
}