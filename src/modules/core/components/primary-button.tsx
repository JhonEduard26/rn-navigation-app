import { Pressable, Text } from "react-native"
import { globalStyles } from "../theme/theme"

interface Props {
  onPress: () => void;
  title: string;
}

export const PrimaryButton = ({ onPress, title }: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  )
}