import React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

const Welcome = () => {
  return (
    <ImageBackground
      source={require("../img/bg.jpg")}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../img/lazy_logo.png")}
          resizeMode="center"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />

        <Text style={styles.title}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
        <Image
          style={styles.image}
          source={require("../img/Picture1.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Image
          style={styles.image}
          source={require("../img/Picture2.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Image
          style={styles.image}
          source={require("../img/Picture3.jpg")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#495E57",
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Welcome;
