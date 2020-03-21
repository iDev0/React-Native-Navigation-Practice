import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// 네비게이터 안에 다른 네비게이터를 랜더링할 수 있다.
// Tab 메뉴 또는 햄버거(사이드 슬라이더 메뉴)

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function Feed() {
    return (
        <>
            <Text>Feed Screen</Text>
        </>
    )
}

function Messages() {
    return (
        <>
            <Text>Messages Screen</Text>
        </>
    )
}

function HomeScreen() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Feed" component={Feed}/>
          <Tab.Screen name="Messages" component={Messages}/>
      </Tab.Navigator>
    )
}


class NestingNavigatorScreen extends Component { }
NestingNavigatorScreen.prototype.render = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>    
            </Stack.Navigator>            
        </NavigationContainer>
    );
}
    
export default NestingNavigatorScreen

