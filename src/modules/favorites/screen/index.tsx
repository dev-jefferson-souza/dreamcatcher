import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Favorties = () => {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.logo} name="github" size={38} color="#fff" />

      <Text style={{ color: "#fff" }}>Favorites</Text>
    </View>
  );
};
