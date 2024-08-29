import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import { RootStackParams } from "../../core/routes/stack-navigator";
import { useEffect } from "react";

export const ProductScreen = () => {
  const { id, name } = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() =>{
    navigation.setOptions({
      title: name
    })
  }, []);

  return (
    <View>
      <Text style={{fontSize: 20, color: '#090909'}}># {id} - {name}</Text>
    </View>
  );
}