import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useMemo, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { Avatar, IconButton, TextInput } from 'react-native-paper';
import { List } from 'react-native-paper';
import { AppStackParamList } from "../routes/AppRoutes";

type Props = NativeStackScreenProps<AppStackParamList, "FoodSelection">;

export default function FoodSelectionScreen({ navigation, route }: Props) {
    const [text, setText] = useState("");

    const { category, foods } = route.params;

    const filteredFoods = useMemo(() => foods.filter(food => text.toLowerCase().includes(food.name)), [text]);

    return (
        <ScrollView style={styles.container}>
            <TextInput
                label="Buscar produto"
                value={text}
                mode="outlined"
                left={<TextInput.Icon icon="search" />}
                onChangeText={text => setText(text)}
            />
            <Text>{category}</Text>
            {
                foods.map(food => (
                    <List.Item 
                        key={food.id}
                        onPress={() => navigation.navigate("FoodDetails", { food })}
                        title={food.name}
                        left={props => <Avatar.Image source={{ uri: food.imageURL }} {...props} />}
                        right={props => <IconButton icon="warning" size={24} iconColor="#000" />}
                    />
                ))
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    logo: {
        height: 50,
        width: "100%",
        marginBottom: 30
    },
    scanner: {
        marginVertical: 25,
        height: 100,
        width: "100%"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
    textPrimary: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 15,
    },
    button: {
        height: 60,
        justifyContent: "center"

    },

    buttonLabel: {
        fontWeight: "bold",
        fontSize: 22,
    }

})