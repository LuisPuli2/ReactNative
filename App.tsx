import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageResult from '@atoms/ImageResult';
import HomeScreen from '@atoms/HomeScreen';
import DetailsScreen from '@atoms/DetailsScreen';

const Stack = createStackNavigator();
const StackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="ImageResult" component={ImageResult} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}

export default App;
