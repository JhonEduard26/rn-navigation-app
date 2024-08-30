import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabScren } from '../../tabs/screens/tab';
import { Tab2Screen } from '../../tabs/screens/tab2';
import { Tab3Screen } from '../../tabs/screens/tab3';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={TabScren} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
}