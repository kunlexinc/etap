import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
 import { NavigationContainer } from "@react-navigation/native";
 
import AntDesign from "react-native-vector-icons/AntDesign";

import home from './src/screens/home';
import history from './src/screens/history';
import details from './src/screens/details';
import mantainance from './src/screens/mantainance';

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  return (
  <NavigationContainer>
    <Tab.Navigator
    initialRouteName="home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: 'tomato' }}
  >
 <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <AntDesign name="dashboard" color={focused ? 'tomato' : 'black'} size={25} />
          ),
        }}
      />

<Tab.Screen
        name="history"
        component={history}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({focused}) => (
            <AntDesign name="search1" color={focused ? 'tomato' : 'black'} size={25} />
          ),
        }}
      />

<Tab.Screen
        name="detail"
        component={details}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({focused}) => (
            <AntDesign name="find" color={focused ? 'tomato' : 'black'} size={25} />
          ),
        }}
      />


<Tab.Screen
        name="maintainace"
        component={mantainance}
        options={{
          tabBarLabel: 'Maintainace',
          tabBarIcon: ({focused})=> (
            <AntDesign name="select1" color={focused ? 'tomato' : 'black'} size={25} />
          ),
        }}
      />
   
</Tab.Navigator>
</NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
