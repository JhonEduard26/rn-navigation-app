import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile';
import { StackNavigator } from './stack-navigator';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';

export type RootDrawerParams = {
  StackNavigator: undefined
  Profile: undefined
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.background,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        }
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50
      }} />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}