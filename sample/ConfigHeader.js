import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { NavigationContainer, BaseRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello React Navigation</Text>
        <Button
            title="Update the title"
            onPress={() => navigation.navigate('Next', { name : 'test'}) }
            />
      </View>
    )
}

function NextScreen({navigation, route}) {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>다음 페이지입니다.</Text>
        </View>
      )
}


const Stack = createStackNavigator()
class ConfigHeaderScreen extends Component { }


const headerOptions = {
    title : '',
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitle : props => <LogoIcon {...props}/>
}

// 공통으로 스타일을 적용하고자 하는경우 Stack.Navigator 의 screenOptions 를 이용하자
const screenOptions = {
    headerStyle : {
        backgroundColor: '#f4511e',
    }
}

// 타이틀 대신 특정 컴포넌트로 헤더를 대신할 수 있다.
class LogoIcon extends Component {
    render() {
        return (
            <Ionicons name="md-checkmark-circle" size={32} color="white" />
        )
    }
}


ConfigHeaderScreen.prototype.render = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={HomeScreen} options={headerOptions}/>
                <Stack.Screen name="Next" component={NextScreen} options={({route}) => ({ title : route.params.name})}/>  
            </Stack.Navigator>            
        </NavigationContainer>
    );
}
    
export default ConfigHeaderScreen

