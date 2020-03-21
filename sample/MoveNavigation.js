import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

// 화면 전환시 반드시 이름이 설정되어 있어야 전환이 가능합니다.
// <Stack.Screen name="Home" component={HomeScreen}/>  
// <Stack.Screen name="Next" component={NextScreen}/> 

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello React Navigation</Text>
        <Button 
            title="다음 스크린으로 이동"
            onPress={() => navigation.navigate('Next')}
        />
      </View>
    )
}

function NextScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>다음 페이지입니다.</Text>
            <Text>navigate 와 push 와 goback 를 보여드립니다.</Text>
            <Button
                title="NextScreen navigate"
                onPress={() => navigation.navigate('Next')} />

            <Button
                title="NextScreen push"
                onPress={() => navigation.push('Next')} />

            <Button
                title="NextScreen goback"
                onPress={() => navigation.goBack()} />

            <Button
                title="NextScreen goto root"
                onPress={() => navigation.popToTop()} />
        </View>
      )
}


class MoveNavigationScreen extends Component { }

MoveNavigationScreen.prototype.render = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>  
                <Stack.Screen name="Next" component={NextScreen}/>  
            </Stack.Navigator>            
        </NavigationContainer>
    );
}
    
export default MoveNavigationScreen

