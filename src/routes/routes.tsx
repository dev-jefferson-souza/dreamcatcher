import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { CustomTabBar, CustomTabBarProps } from "../components/customTabBar";
import { Favorites } from "../modules/favorites/screen";
import { Home } from "../modules/home/screen";

const Tab = createBottomTabNavigator();

function TabBar(props: Readonly<CustomTabBarProps>) {
  return <CustomTabBar {...props} />;
}

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBar={(props) => TabBar(props)}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
  keyboardHidesTabBar: true,
};

export default Routes;
