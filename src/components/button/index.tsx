import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { styles } from "./styles";

type colorType = "green" | "gray";

interface IButton extends TouchableOpacityProps {
  title: string;
  color?: colorType;
}

export const Button = ({
  title,
  color = "gray",
  children,
  ...rest
}: IButton) => {
  function handleButtonColor() {
    const styles: Record<colorType, ViewStyle> = {
      green: { backgroundColor: "#3fb950", borderColor: "#006d32" },
      gray: { backgroundColor: "#21262d", borderColor: "rgb(22, 27, 34)" },
    };

    return styles[color];
  }

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      style={[handleButtonColor(), styles.button, rest.style]}
    >
      <Text style={styles.label}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};
