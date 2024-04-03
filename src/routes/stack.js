import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from './tabs';
import Home from '../pages/home';
import Artist from '../pages/artist';
import Login from '../pages/login';
import Cadastrar from '../pages/login/cadastrar';
import Entrar from '../pages/login/entrar';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
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
