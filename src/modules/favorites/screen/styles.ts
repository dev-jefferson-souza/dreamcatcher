import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010409",
    padding: 16,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  logo: { margin: 16 },
});
