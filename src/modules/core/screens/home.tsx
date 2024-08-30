import { View, Text, Pressable } from "react-native"
import { globalStyles } from "../theme/theme"
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../components/primary-button";
import { useEffect } from "react";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text style={{ color: "black" }}>Menu</Text>
        </Pressable>
      )
    })
  }, [])

  return (
    <View style={globalStyles.container}>
      <PrimaryButton title="Productos" onPress={() => navigation.navigate('Products' as never)} />
      <PrimaryButton title="Configuraciones" onPress={() => navigation.navigate('Settings' as never)} />
    </View>
  )
}