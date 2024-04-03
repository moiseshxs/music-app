import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../pages/home';
import Library from '../pages/library';
import Buscar from '../pages/buscar';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 55,
        }
      }}>
      <Tab.Screen
        name='Inicio'
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => <Octicons name='home' color={color} size={size} />,
          tabBarLabel: 'Início',
        }}
      />

      <Tab.Screen
        name='Buscar'
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='search' color={color} size={size} />,
          tabBarLabel: 'Buscar',
        }}
      />

      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='bookshelf' color={color} size={size} />,
          tabBarLabel: 'Sua Biblioteca'
        }}
      />
    </Tab.Navigator>
  );
}
