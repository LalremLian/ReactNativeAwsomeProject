import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

const FeedbackForm = () => {
  // declare the variables
  const [loggedIn, onLogin] = useState(false);
  const [firstName, onChangeFirstName] = useState("");
  const [pasword, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Wrap the TextInput components in a KeyboardAvoidingView component to ensure that the keyboard does not cover the input fields when the user is typing. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "position"}
      >
        {/* keyboardDismissMode is used to dismiss the keyboard when the user */}
        <ScrollView style={styles.scrollView} keyboardDismissMode="on-drag">
          <Text style={styles.headingSection}>Welcome to Login Page</Text>
          <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment.
          </Text>

          {loggedIn && (
            <Text style={styles.headerText}>You are logged in!</Text>
          )}

          {!loggedIn && (
            <>
              <TextInput
                style={styles.input}
                value={firstName}
                placeholder="User Name"
                onChangeText={onChangeFirstName}
              />
              <TextInput
                style={styles.input}
                value={pasword}
                placeholder="Password"
                secureTextEntry={true}
                passwordRules={
                  "required: upper; required: lower; required: digit;"
                }
                onChangeText={onChangePassword}
              />
              <Pressable
                onPress={() => onLogin(!loggedIn)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Log in</Text>
              </Pressable>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    // borderColor: "EDEFEE",
    backgroundColor: "#F4CE14",
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14",
  },
  infoSection: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  headingSection: {
    fontSize: 25,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});

export default FeedbackForm;
