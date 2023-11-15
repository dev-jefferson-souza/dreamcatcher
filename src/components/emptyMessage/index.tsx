import { Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { SimpleLineIcons } from "@expo/vector-icons";
import { styles } from "./styles";
export const EmptyMessage = () => {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          style={{ marginLeft: 48 }}
          name="sleep"
          size={32}
          color="#68707b"
        />
        <SimpleLineIcons name="social-github" size={84} color="#68707b" />
      </View>
      <Text style={styles.label}>
        Ops, parece que não há nenhum sonho por aqui.
      </Text>
    </View>
  );
};
