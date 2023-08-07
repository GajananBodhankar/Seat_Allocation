/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './Navigate';
import Index from '../Screen';
import Welcome from '../Welcome/Welcome';
import End from '../End/End';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="End" component={End} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigation;
