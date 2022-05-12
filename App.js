import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PageA from './components/PageA';
import PageB from './components/PageB';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen options={{headerShown:false}} name="Pa" component={PageA} />
        <Stack.Screen  name="Pb" component={PageB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


