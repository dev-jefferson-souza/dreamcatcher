import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

interface ITextInput extends TextInputProps {
  title?: string;
}

export const Input = ({ title, ...rest }: ITextInput) => {
  return (
    <View style={[styles.container]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={[styles.input, rest.style]}
        placeholderTextColor={"#68707b"}
        cursorColor={"#fff"}
        {...rest}
      ></TextInput>
    </View>
  );
};
