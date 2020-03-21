import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const ModalStack = createStackNavigator()
const RootStack = createStackNavigator()

function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
          <Button
            onPress={() => navigation.navigate('MyModal')}
            title="Open Modal"
          />
        </View>
      );
}

function DetailScreen() {
    return (<><Text>DetailScreen</Text></>)
}

function ModalScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

function ModalStackScreen() {
    return (
        <ModalStack.Navigator>
            <ModalStack.Screen name="Home" component={HomeScreen}/>
            <ModalStack.Screen name="Details" component={DetailScreen}/>
        </ModalStack.Navigator>
    )
}

function ModalNextScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal! 22</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}




function OpenModalScreen() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen 
                    name="Main" 
                    component={ModalStackScreen} 
                    options={{headerShown : false}}
                />
                <RootStack.Screen name="MyModal" component={ModalScreen} options={{headerShown : false}}/>
                <RootStack.Screen name="NextModal" component={ModalNextScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default OpenModalScreen
