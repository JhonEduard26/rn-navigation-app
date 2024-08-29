import { PrimaryButton } from "../components/primary-button";
import { StackActions, useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { globalStyles } from "../theme/theme";

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, color: '#595959' }}>Settings Screen</Text>

      <PrimaryButton
        title="Regresar"
        onPress={() => navigation.goBack()}
      />

      <PrimaryButton
        title="Regresar al inicio"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}