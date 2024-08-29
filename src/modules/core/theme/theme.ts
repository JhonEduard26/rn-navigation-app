import { StyleSheet } from "react-native";

export const globalColors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#222',

  background: '#fff',
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: globalColors.primary,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
})