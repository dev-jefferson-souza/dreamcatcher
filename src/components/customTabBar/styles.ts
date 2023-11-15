import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tabBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#0d1117",
    borderTopWidth: 1,
    borderTopColor: "#0d1117",
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabBarItem: {
    borderTopWidth: 2,
    borderTopColor: "#8957e5",
  },
});
