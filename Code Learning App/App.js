import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Web from "./Components/Web";
import Mobile from "./Components/Mobile";
import Standalone from "./Components/Standalone";
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import { StatusBar } from 'expo-status-bar';
import React from  'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';


import {createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      headerTitleAlign: 'center',
      TabBarActiveTintColor:'red',
      TabBarInactiveTintColor:'#810541'

      }}>
      <Tab.Group>
                <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                  tabBarIcon: ({color}) => (
                    <Entypo name="home" size={24} color="#810541" />
                  ),
                }}
                />
                <Stack.Screen 
                  name="Web" 
                  component={Web}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Fontisto name="code" size={24} color="#810541" />
                    ),
                  }}
                  />
                <Stack.Screen 
                  name="Mobile" 
                  component={Mobile}
                  options={{
                    tabBarIcon: ({color}) => (
                      <Entypo name="mobile" size={24} color="#810541" />
                    ),
                  }}
                  />
                <Stack.Screen 
                  name="Standalone" 
                  component={Standalone}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialIcons name="computer" size={24} color="#810541" />
                    ),
                  }}
                  />
      </Tab.Group>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen 
                 name="Login"
                 component={Login}
                 options={{
                    headerTitleAlign: 'center',
                    backgroundColor: 'red',
                 }}
                 />
                 <Stack.Screen 
                  name="Register" 
                  component={Register}
                  options={{
                      headerTitleAlign: 'center',
                      backgroundColor: 'red',
                   }}
                  />
                 <Stack.Screen 
                 name="TabNavigator" 
                 component={TabNavigator} 
                 
                 options={{
                  headerShown:false,
                 }}/>
        </Stack.Group>
      </Stack.Navigator>
      <StatusBar style="dark" />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
