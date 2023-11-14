import { Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Favorties } from "../modules/favorites/screen";
import { Home } from "../modules/home/screen";

interface ITabBarIcon {
  focused: boolean;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} options={homeTabOptions} />
        <Tab.Screen
          name="Favorites"
          component={Favorties}
          options={favTabOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#8957e5",
  tabBarInactiveBackgroundColor: "#0d1117",
  tabBarActiveBackgroundColor: "#0d1117",
  tabBarInactiveTintColor: "#68707b",
  tabBarStyle: { height: 60, borderTopWidth: 0 },
  style: {
    elevation: 0,
    shadowOffset: { width: 0, height: 0 },
  },
};

const homeTabOptions = {
  tabBarIcon: ({ color }: ITabBarIcon) => (
    <Feather name="home" size={22} color={color} />
  ),
};

const favTabOptions = {
  tabBarIcon: ({ color }: ITabBarIcon) => (
    <FontAwesome name="star" size={22} color={color} />
  ),
};
