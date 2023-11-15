import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, StatusBar, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { DreamCard } from "../../../components/dreamCard";
import { EmptyMessage } from "../../../components/emptyMessage";
import { Input } from "../../../components/input";
import { IDream } from "../../../models/dream";
import { styles } from "./styles";

interface ICleanStates<T = string>
  extends Array<React.Dispatch<React.SetStateAction<T>>> {}

export const Home = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dreams, setDreams] = useState<Array<IDream>>([]);

  function createDream() {
    const id = Math.floor(Math.random() * 1000).toString();
    const dream: IDream = { title, description, id, favorite: false };

    if (title.length === 0 || description.length === 0) {
      return Toast.show("Preencha todos os campos.", {
        position: StatusBar.currentHeight,
        backgroundColor: "#0d1117",
      });
    }

    setDreams([dream, ...dreams]);
    cleanStates([setTitle, setDescription]);
  }

  function cleanStates(states: ICleanStates<string>) {
    states.forEach((state) => state(""));
  }

  function isDreamsEmpty() {
    if (dreams.length > 0) {
      return (
        <FlatList
          data={dreams}
          renderItem={({ item }) => <DreamCard dream={item} />}
        />
      );
    } else {
      return <EmptyMessage />;
    }
  }

  return (
    <View style={styles.container}>
      <AntDesign style={styles.logo} name="github" size={38} color="#fff" />
      <Card style={{ marginBottom: 8 }}>
        <View style={styles.inputsWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Registre um sonho</Text>
            <Ionicons name="create-outline" size={22} color="#fff" />
          </View>
          <Input
            value={title}
            onChangeText={setTitle}
            title="Título"
            placeholder="Digite um título"
          />
          <Input
            value={description}
            onChangeText={setDescription}
            title="Descrição"
            placeholder="Descreva seu sonho"
            numberOfLines={6}
            textAlignVertical="top"
            multiline={true}
          />

          <Button
            title="Registrar"
            color="green"
            onPress={createDream}
            style={{ width: 120 }}
          >
            <Feather name="save" size={22} color="#fff" />
          </Button>
        </View>
      </Card>
      {isDreamsEmpty()}
    </View>
  );
};
