import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { View } from "react-native";
import { DreamCard } from "../../../components/dreamCard";
import { EmptyMessage } from "../../../components/emptyMessage";
import { DreamsContext } from "../../../context/DreamsContext";
import { styles } from "./styles";

export const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(DreamsContext);

  function isFavoriteDreamsEmpty() {
    if (favorites.length > 0) {
      return favorites.map((dream) => (
        <DreamCard
          onPressFavorite={toggleFavorite}
          dream={dream}
          key={dream.id}
        />
      ));
    } else {
      return <EmptyMessage />;
    }
  }

  return (
    <View style={styles.container}>
      <AntDesign style={styles.logo} name="github" size={38} color="#fff" />
      {isFavoriteDreamsEmpty()}
    </View>
  );
};
