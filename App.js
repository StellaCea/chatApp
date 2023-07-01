import { StyleSheet, Text, View, ImageBackground } from 'react-native';
//import the screens we want to navigate
import Start from './components/Start';
import Chat from './components/Chat';
//import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore, disableNetwork, enableNetwork } from 'firebase/firestore';
import { useNetInfo }from '@react-native-community/netinfo';
import { useEffect } from 'react';
import{ LogBox, Alert} from 'react-native';


const App = () => {
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKv0K4dKfUNHJKFVRuQGCkTncx9UibQaU",
    authDomain: "chatapp-250c4.firebaseapp.com",
    projectId: "chatapp-250c4",
    storageBucket: "chatapp-250c4.appspot.com",
    messagingSenderId: "933194471957",
    appId: "1:933194471957:web:f52882aa7057c5c2c64c1c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const connectionStatus = useNetInfo();

  //create the navigator
  const Stack = createNativeStackNavigator();

  //displays an alert popup when connection is lost
  useEffect (() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection lost');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]); 

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
        >
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props} />}

        </Stack.Screen>
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
