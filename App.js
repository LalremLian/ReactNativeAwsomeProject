import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";

//----------------------------------importing components----------------------------------
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonBody from "./components/LittleLemonBody";
import MenuItems from "./components/MenuItems";
import SectionList from "./components/SectionList";
import TextInput from "./components/FeedbackForm";
import LoginPage from "./components/Login";
import LazyDeveloper from "./components/LazyDeveloper";
import ColorScheme from "./components/ColorSchemeHook";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <LittleLemonBody /> */}
        {/* <MenuItems /> */}
        {/* <SectionList /> */}
        {/* <TextInput /> */}
        {/* <LoginPage /> */}
        {/* <LazyDeveloper /> */}
        <ColorScheme />
      </View>

      <View style={styles.bottomContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

//---------------------------------------------Styling---------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  bottomContainer: {
    backgroundColor: "#495E57",
  },
});
