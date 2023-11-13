import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010409",
    padding: 16,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  logo: { marginBottom: 32 },

  inputsWrapper: { gap: 24 },

  titleWrapper: {
    flexDirection: "row",
    gap: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
