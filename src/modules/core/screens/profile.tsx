import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PrimaryButton } from "../components/primary-button";
import { globalStyles } from "../theme/theme";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={
      globalStyles.container
    }>
      <Text style={{ color: "black" }}>ProfileScreen</Text>

      <PrimaryButton
        title="Abrir menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}