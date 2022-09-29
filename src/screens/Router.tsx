import React from 'react';
// import navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

// telas
import { Home } from './Home'
import { Courses } from './Courses';
import { Environments } from './Environments';
import { Teachers } from './Teachers';
import { ProfileTeacher } from './ProfileTeacher';


const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()



function DrawerNavigator() {

  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle:'', 
        drawerPosition:'right', 
        
      }}
    >
      <Drawer.Screen  name="Inicio"  component={Home}/>
      <Drawer.Screen name="Curso" component={Courses}/>
      <Drawer.Screen name="Ambientes" component={Environments} />
      <Drawer.Screen name="Professores" component={Teachers} />
    </Drawer.Navigator>
  )
}
export function Router() {
  return (
    <Stack.Navigator  screenOptions={{
      
      headerTitle:'', 
   
    }} >
      <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNavigator} />
      <Stack.Screen   name="ProfileTeacher" component={ProfileTeacher} />
    </Stack.Navigator>
  );
}