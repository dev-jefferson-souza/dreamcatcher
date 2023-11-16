import { Feather, FontAwesome } from "@expo/vector-icons";
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
  onPressDelete: (id: string) => void;
}

export const DreamCard = ({ dream, onPressFavorite, onPressDelete }: Props) => {
  function handleStarIcon() {
    const icon = dream.favorite ? "star" : "star-o";
    return <FontAwesome name={icon} size={26} color="#fff" />;
  }

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{dream.title}</Text>
          <View style={styles.iconsWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onPressFavorite(dream.id)}
            >
              {handleStarIcon()}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onPressDelete(dream.id)}
            >
              <Feather name="trash" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>{dream.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
