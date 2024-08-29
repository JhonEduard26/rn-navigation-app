import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../theme/theme"
import { useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../components/primary-button";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton title="Productos" onPress={() => navigation.navigate('Products' as never)} />
      <PrimaryButton title="Configuraciones" onPress={() => navigation.navigate('Settings' as never)} />
    </View>
  )
}