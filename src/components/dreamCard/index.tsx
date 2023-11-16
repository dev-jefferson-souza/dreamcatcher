import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { IDream } from "../../models/dream";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  dream: IDream;
  onPressFavorite: (id: string) => void;
}

export const DreamCard = ({ dream, onPressFavorite }: Props) => {
  function handleStarIcon() {
    const icon = dream.favorite ? "star" : "star-o";
    return (
      <FontAwesome
        onPress={() => onPressFavorite(dream.id)}
        name={icon}
        size={32}
        color="#fff"
      />
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{dream.title}</Text>
          <TouchableOpacity activeOpacity={0.7}>
            {handleStarIcon()}
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{dream.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
