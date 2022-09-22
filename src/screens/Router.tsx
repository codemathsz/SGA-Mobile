import React from 'react';
// import navigations
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

// telas
import { Home } from './Home'
import { Courses } from './Courses';
import { Environments } from './Environments';
import { Teachers } from './Teachers';


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
        name="Inicio" 
        component={Home}
       options={{
        
       }}
      />
      <Drawer.Screen name="Curso" component={Courses}/>
      <Drawer.Screen name="Ambientes" component={Environments} />
      <Drawer.Screen name="Professores" component={Teachers} />
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