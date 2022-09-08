/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import { StatusBar } from 'react-native';
 
 import Main from './src/components/main';
 import Buttons from './src/components/buttons';
 import Items from './src/components/items';
 import mySets from './src/components/mysets';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import { store } from './src/redux/store';
 import { Provider } from 'react-redux';




 const Stack = createNativeStackNavigator();
 
 const App = () => {

   return (
    <Provider store={store}>
      <StatusBar barStyle={style.headerStyle.headerTintColor} backgroundColor={style.headerStyle.backgroundColor} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} options={style} />
          <Stack.Screen name="Buttons" component={Buttons} options={style} />
          <Stack.Screen name="Items" component={Items} options={style} />
          <Stack.Screen name="My Sets" component={mySets} options={style} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>    
       
   );
 };

 const style = {
  
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
 
 
 
 export default App;
 