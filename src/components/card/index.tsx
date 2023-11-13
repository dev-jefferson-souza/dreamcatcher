import { View } from "react-native";
import { styles } from "./styles";

export const Card = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};
