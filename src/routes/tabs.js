import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Library from '../pages/library';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: 'white', 
        tabBarStyle: {
          backgroundColor: 'red',
          marginHorizontal: 20,
          bottom: 30,
          borderRadius: 25,
          paddingBottom: 1,
          borderWidth: 0,
          position: 'absolute',
          }}}>
      <Tab.Screen 
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size} />,
          tabBarLabel: 'Home',
        }}
      />

      <Tab.Screen 
        name='Library'
        component={Library}
        options={{
          tabBarIcon: ({color, size}) => <Feather name='folder' color={color} size={size} />,
          tabBarLabel: 'Library'
        }}
      />
    </Tab.Navigator>
  );
}
