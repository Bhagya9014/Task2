import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './Forum/Posts';
import User from './Forum/User';
import Comments from './Forum/Comments';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

export default class App extends React.Component {
 render(){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={Posts}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
  }
};
