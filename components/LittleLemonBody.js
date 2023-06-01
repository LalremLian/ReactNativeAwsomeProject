import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={bodyStyles.container}>
      <Text
        style={bodyStyles.textStyle1}>
        Welcome to my teritory
      </Text>
      <Text
        style={bodyStyles.textStyle2} numberOfLines={4}>
        A computer programmer, sometimes referred to as a software developer, a software engineer, a programmer or a coder, is a person who creates computer programs — often for larger computer software.
      </Text>
    </View>
  );
}


//---------------------------------------------Styling---------------------------------------------
const bodyStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle1: {
    color: 'white',
    fontSize: 40,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  textStyle2: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }
});
