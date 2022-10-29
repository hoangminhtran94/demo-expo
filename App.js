import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Text>{process.env["REACT_APP_API"]}</Text>
      {/* <Text>{Constants.expoConfig.extra.api}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
