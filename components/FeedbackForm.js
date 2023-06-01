import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

const FeedbackForm = () => {
  // declare the variables
  const [firstName, onChangeFirstName] = useState("");
  const [pasword, onChangePassword] = useState("");
  const [message, onChangeMessage] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      {/* Wrap the TextInput components in a KeyboardAvoidingView component to ensure that the keyboard does not cover the input fields when the user is typing. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "position"}
      >
        {/* keyboardDismissMode is used to dismiss the keyboard when the user */}
        <ScrollView style={styles.scrollView} keyboardDismissMode="on-drag">
          <Text style={styles.headingSection}>
            How was your visit to Little Lemon?
          </Text>
          <Text style={styles.infoSection}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. We
            would love to hear your experience with us!?
          </Text>

          <TextInput
            style={styles.input}
            value={firstName}
            placeholder="First Name"
            onFocus={() => {
              Alert.alert("First name is focussed");
            }}
            onBlur={() => {
              Alert.alert("Thanks for entering your first name");
            }}
            onChangeText={onChangeFirstName}
          />
          <TextInput
            style={styles.input}
            value={pasword}
            placeholder="Password"
            secureTextEntry={true}
            passwordRules={"required: upper; required: lower; required: digit;"}
            onChangeText={onChangePassword}
          />
          <TextInput
            style={styles.input}
            value={phoneNumber}
            placeholder="Phone Number"
            keyboardType={"phone-pad"}
            onChangeText={onChangePhoneNumber}
          />
          <TextInput
            style={styles.messageInput}
            value={message}
            placeholder="Message"
            multiline={true}
            maxLength={10}
            onChangeText={onChangeMessage}
          />
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
});

export default FeedbackForm;
