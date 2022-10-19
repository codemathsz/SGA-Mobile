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

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AdvancedSearch } from './AdvancedSearch';
import { THEME } from '../themes';

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
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitle: '',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ' Inicio') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Busca Avançada') {
            iconName = focused ? 'earth' : 'earth';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: THEME.COLORS.AZUL_500,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name=" Inicio" component={Home} />
      <Tab.Screen name="Busca Avançada" component={AdvancedSearch} />
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
      <Stack.Screen name='Drawer' component={DrawerNavigator} />
      <Stack.Screen options={{ headerShown: true }} name="ProfileTeacher" component={ProfileTeacher} />
    </Stack.Navigator>
  );
}
