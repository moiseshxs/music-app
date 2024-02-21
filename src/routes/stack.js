import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './tabs';
import Home from '../pages/home';
import Artist from '../pages/artist';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name='Home'
        component={Tabs}
        options={{
          
        }}
      />
      
      <Stack.Screen 
        name='Artist'
        component={Artist}
        options={{
          
        }}
      />
    </Stack.Navigator>
  );
}
