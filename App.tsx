import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import { Home } from "./src/modules/home/screen";

export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar style="light" />
      <Home></Home>
    </RootSiblingParent>
  );
}
