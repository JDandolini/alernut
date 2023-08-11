import { useMemo, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { Avatar, Chip, IconButton, TextInput } from 'react-native-paper';
import { List } from 'react-native-paper';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FoodStackParamList, ProtectedTabParamList } from "../routes/AppRoutes";
import { Tag } from "../components/Tag";
import { useAllergy } from "../contexts/AllergyContext";

type Props = CompositeScreenProps<
    NativeStackScreenProps<FoodStackParamList, "FoodSelection">,
    BottomTabScreenProps<ProtectedTabParamList>
>;

export default function FoodSelectionScreen({ navigation, route }: Props) {
    const [text, setText] = useState("");

    const { category, foods } = route.params;

    const filteredFoods = useMemo(() => foods.filter(food => food.name.toLowerCase().includes(text.toLowerCase())), [text]);

    const { hasAllergy } = useAllergy();

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
                filteredFoods.map(food => (
                    <List.Item 
                        key={food.id}
                        onPress={() => navigation.navigate("FoodDetails", { food })}
                        title={food.name}
                        left={props => <Avatar.Image source={{ uri: food.imageURL }} {...props} />}
                        right={() => <View style={styles.tagsContainer}>{food.allergens?.map(allergen => <Tag color={hasAllergy(allergen) ? "red" : ""} text={allergen.name} />)}</View>}
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
    },
    tagsContainer: {
        width: "50%",
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        rowGap: 4
    }

})