import './gesture-handler.native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './modules/core/routes/stack-navigator';

export default function App () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
