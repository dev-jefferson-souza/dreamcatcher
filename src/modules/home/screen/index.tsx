import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { DreamCard } from "../../../components/dreamCard";
import { Input } from "../../../components/input";
import { IDream } from "../../../models/dream";
import { styles } from "./styles";

export const Home = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const dreamArray: IDream[] = [
    {
      id: "1",
      title: "Flying on Cloud Nine",
      description:
        "Soaring through the skies on fluffy clouds and feeling the wind beneath my wings.",
      favorite: true,
    },
    {
      id: "2",
      title: "Underwater Adventure",
      description:
        "Exploring the depths of the ocean, encountering colorful fish and mysterious sea creatures.",
      favorite: false,
    },
    {
      id: "3",
      title: "Space Odyssey",
      description:
        "Embarking on a journey to the stars, visiting distant planets and galaxies.",
      favorite: false,
    },
    {
      id: "4",
      title: "Time Traveler's Tale",
      description:
        "Traveling through time, witnessing historical events and experiencing different eras.",
      favorite: true,
    },
    {
      id: "5",
      title: "Time Traveler's Tale Time Traveler's Tale Time Traveler's Tale",
      description:
        "Traveling through time, witnessing historical events and experiencing different eras.",
      favorite: true,
    },
  ];

  function createDream() {
    const dream = { title, description };
    console.log(dream);
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

      <FlatList
        data={dreamArray}
        renderItem={({ item }) => <DreamCard dream={item} />}
      />
    </View>
  );
};
