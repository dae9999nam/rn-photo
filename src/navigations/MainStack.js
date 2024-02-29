import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import { MainRoutes } from './routes';
import ProfileScreen from '../screens/ProfileScreen';
import ContentTab from './ContentTab';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: WHITE } }}
    >
      <Stack.Screen name={MainRoutes.CONETENT_TAB} component={ContentTab} />
    </Stack.Navigator>
  );
};

export default MainStack;
