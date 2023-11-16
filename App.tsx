import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import DreamsProvider from "./src/context/DreamsContext";
import { Routes } from "./src/routes/routes";

export default function App() {
  return (
    <RootSiblingParent>
      <DreamsProvider>
        <StatusBar style="light" backgroundColor="#000" />
        <Routes />
      </DreamsProvider>
    </RootSiblingParent>
  );
}
