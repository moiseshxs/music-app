import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './tabs';
import Home from '../pages/home';
import Artist from '../pages/artist';
import Login from '../pages/login';
import Cadastrar from '../pages/login/cadastrar';
import Entrar from '../pages/login/entrar';
import Loading from '../pages/loading';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Loading' screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={Tabs}
        options={{

        }}
      />

<Stack.Screen
        name='Loading'
        component={Loading}
        options={{

        }}
      />

      <Stack.Screen
        name='Artist'
        component={Artist}
        options={{

        }}
      />

      <Stack.Screen
        name='Login'
        component={Login}
        options={{

        }}
      />

      <Stack.Screen
        name='Entrar'
        component={Entrar}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='Cadastrar'
        component={Cadastrar}
        options={{

        }}
      />
    </Stack.Navigator>
  );
}
