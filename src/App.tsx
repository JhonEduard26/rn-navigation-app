import './gesture-handler.native';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './modules/core/routes/stack-navigator';
import { DrawerNavigator } from './modules/core/routes/drawer-navigator';

export default function App () {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
}
