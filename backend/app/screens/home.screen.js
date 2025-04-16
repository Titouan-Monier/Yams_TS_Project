// App.js

import { StyleSheet, Text, View, Platform } from "react-native";
// ./App.js

import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/home.screen';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs(true);

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
// ...
// Replace Line 6
// const socketEndpoint = "http://localhost:3000";

console.log('Emulation OS Platform: ', Platform.OS);
// Also usable : "<http://10.0.2.2:3000>"
export const socketEndpoint = Platform.OS === 'web' ? "http://localhost:3000" : "http://172.20.10.3:3000";
// '172.20.10.3' must be replaced by your intern IP adress

// app/screens/home.screen.js

import { StyleSheet, View, Button } from "react-native";

export function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Jouer en ligne"
          onPress={() => navigation.navigate('OnlineGameScreen')}
        />
      </View>
      <View>
        <Button
          title="Jouer contre le bot"
          onPress={() => navigation.navigate('VsBotGameScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
