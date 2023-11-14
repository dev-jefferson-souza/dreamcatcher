import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import { Routes } from "./src/routes/routes";

export default function App() {
  return (
    <RootSiblingParent>
      <StatusBar style="light" />
      <Routes />
    </RootSiblingParent>
  );
}
