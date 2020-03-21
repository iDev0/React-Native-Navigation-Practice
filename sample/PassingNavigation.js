import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/**
route 기능을 사용하여 데이터 전달이 가능하다.
Screen 에 미리 초기값 지정도 가능하다.
<Stack.Screen name="Next" component={NextScreen} initialParams={{itemId : 111}}/>

 */
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello React Navigation</Text>
        <Button 
            title="다음 페이지로 데이터를 전달합니다."
            onPress={() => navigation.navigate('Next', {name : 'idev0'})}
        />
      </View>
    )
}

function NextScreen({route}) {
    const {itemId} = route.params
    const {name} = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>다음 페이지입니다.</Text>
            <Text>전달받은 데이터는 다음과 같습니다.</Text>
            <Text>아이템 아이디 : {JSON.stringify(itemId)}</Text>
            <Text>이름 : {JSON.stringify(name)}</Text>
        </View>
      )
}

function ListScreen({navigation, route}) {
    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
            console.log('데이터가 들어왔어!');


        }
      }, [route.params?.post]);
    
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Create post"
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
      );
}

function CreateRegisterScreen({navigation, route}) {

    const [postText, setPostText] = React.useState(route.params.postText);

    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass params back to home screen
            navigation.navigate('List', { post: postText });
          }}
        />
      </>
    );
}



const Stack = createStackNavigator()
class PassingNavigationScreen extends Component { }
PassingNavigationScreen.prototype.render = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="List" component={ListScreen}/>  
                <Stack.Screen name="Register" component={CreateRegisterScreen} initialParams={{postText : '값을 입력해줘요'}}/>                 
                <Stack.Screen name="Home" component={HomeScreen}/>  
                <Stack.Screen name="Next" component={NextScreen}/>   
            </Stack.Navigator>            
        </NavigationContainer>
    );
}
    
export default PassingNavigationScreen

