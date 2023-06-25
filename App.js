import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';
//import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  //create the navigator
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'Start'
      >
        <Stack.Screen
          name='Start'
          component={Start}
        />
        <Stack.Screen
          name='Chat'
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
