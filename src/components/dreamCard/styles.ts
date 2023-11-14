import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161b22",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    gap: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    width: "90%",
  },

  description: { color: "#8b949e" },
});
