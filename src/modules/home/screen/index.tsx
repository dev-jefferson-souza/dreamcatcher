import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button";
import { Card } from "../../../components/card";
import { Input } from "../../../components/input";
import { styles } from "./styles";

export const Home = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  function createDream() {
    const dream = { title, description };
    console.log(dream);
  }

  return (
    <View style={styles.container}>
      <AntDesign style={styles.logo} name="github" size={38} color="#fff" />
      <Card>
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
    </View>
  );
};
