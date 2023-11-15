import { Feather, FontAwesome } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface CustomTabBarProps extends BottomTabBarProps {}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  navigation,
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconProps = {
          color: isFocused ? "#8957e5" : "#68707b",
          size: 22,
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabBarItem, isFocused && styles.activeTabBarItem]}
          >
            {label === "Home" && <Feather name="home" {...iconProps} />}
            {label === "Favorites" && (
              <FontAwesome name="star" {...iconProps} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
