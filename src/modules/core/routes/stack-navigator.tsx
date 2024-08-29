import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home";
import { ProductsScreen } from "../../products/screens/products";
import { SettingsScreen } from "../screens/settings";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}