import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={headerStyles.container}>
      <Text
        style={headerStyles.textStyle1}numberOfLines={3}>
        Welcome to{'\n '}
        <Text style={headerStyles.textStyle2}>
          Little Lemon
        </Text>
      </Text>
    </View>
  );
}


//---------------------------------------------Styling---------------------------------------------
const headerStyles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F4CE14',
    paddingTop: 40,
  },
  textStyle1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  textStyle2: {
    fontWeight:'bold', 
    fontSize: 22
  },
});