import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../../core/theme/theme";
import { PrimaryButton } from "../../core/components/primary-button";
import { type NavigationProp, useNavigation } from "@react-navigation/native";
import { type RootStackParams } from "../../core/routes/stack-navigator";

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 24, color: "#090909" }}>Productos</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
            title={item.name}
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 28, color: "#090909" }}>Ajustes</Text>
      <PrimaryButton onPress={() => navigation.navigate('Settings')} title="Ajustes" />

    </View>
  );
}