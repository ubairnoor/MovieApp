import React from 'react';

import Home from './screens/Home'
import Detail from './screens/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator(); 
const App = () =>{  
  // GetPopularMovie() is returning a promise and we use .then() callback function get Get Data.
  // BUt we face issue Movie Title is not Updated.Because we are using Normal Varraible.
  // THe issue is that tjhe title is set after the template got initialized.
  // We cannot use Normal Variable we use React State.

  // Important 
  //>> After we are using useState our CPU is going out of resourse to get rid off from this.
  // when we are using the state and async method we have to use UseEffect.
// To catch the error we use Catch to  get Error from API.
  return (
    <NavigationContainer>
      
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
 
  )
}

export default App;