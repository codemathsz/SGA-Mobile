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
import { Logo } from '../components/Logo';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AdvancedSearch } from './AdvancedSearch';

const Tab = createBottomTabNavigator()

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()



export function DrawerNavigator() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => <Logo />,
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen name="Inicio" component={TabNavigation} />
      <Drawer.Screen name="Professores" component={Teachers} />
      <Drawer.Screen name="Ambientes" component={Environments} />
      <Drawer.Screen name="Cursos" component={Courses} />
    </Drawer.Navigator>
  )
}

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        headerStyle: {
          display: 'none'
        }
      }}
    >
      <Tab.Screen name=" Inicio" component={Home} />
      <Tab.Screen name="AdvancedSearch" component={AdvancedSearch} />
    </Tab.Navigator>

  )
}
export function StackNav() {
  return (
    <Stack.Navigator
    initialRouteName='Drawer'
      screenOptions={{
        headerShown: false,
        headerTitle: '',
      }}
    >
      <Stack.Screen name='Drawer' component={DrawerNavigator}/>
      <Stack.Screen options={{headerShown: true}} name="ProfileTeacher" component={ProfileTeacher} />
    </Stack.Navigator>
  );
}