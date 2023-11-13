import { View, ViewProps } from "react-native";
import { styles } from "./styles";

export const Card = ({ children, ...rest }: ViewProps) => {
  return <View style={[styles.container, rest.style]}>{children}</View>;
};
