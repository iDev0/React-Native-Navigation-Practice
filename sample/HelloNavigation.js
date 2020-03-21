import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello React Navigation</Text>
      </View>
    )
}


class HelloNavigationScreen extends Component { }

HelloNavigationScreen.prototype.render = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>    
            </Stack.Navigator>            
        </NavigationContainer>
    );
}
    
export default HelloNavigationScreen

