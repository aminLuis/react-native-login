import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

import Inicio from './screens/Inicio';
import Sesion from './screens/Sesion';
import Bienvenida from './screens/Bienvenida';

function MyStack(){

  return(
    <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Sesion" component={Sesion} />
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
    </Stack.Navigator>
  )
    
}

export default function App() {

  return (

    <NavigationContainer>
            <MyStack/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 90
    
  },
  
});
