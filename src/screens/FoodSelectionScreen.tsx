import { useMemo, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { TextInput } from 'react-native-paper';
import { List } from 'react-native-paper';

export default function FoodSelectionScreen() {
    const [text, setText] = useState("");

    const foodCategories = [
        {
            id: "1", name: "Grãos e cereais", items: [
                { id: "1a", name: "Arroz" },
                { id: "2a", name: "Trigo", allergens: ["glúten", "lactose"] },
            ]
        },
        { id: "2", name: "Vegetais" },
        { id: "3", name: "Frutas" },
        { id: "4", name: "Laticínios" },
        { id: "5", name: "Gorduras e óleos" },
        { id: "6", name: "Açúcares e doces" },
        { id: "7", name: "Bebidas" },
        { id: "8", name: "Condimentos e temperos" },
    ];

    function showFoodInformation(food) {
        if (food.allergens?.length > 0) {
            Alert.alert("Atenção", `Este alimento contém ${food.allergens.join()}. Por favor, verifique cuidadosamente a lista de ingredientes antes de consumir.`)
        } else {
            Alert.alert("Atenção", "Esse alimento não possui alergênicos!");
        }
    }

    const filteredFoodCategories = useMemo(() => foodCategories.filter(foodCategory => {
        if (text) {
            const filteredItems = foodCategory.items?.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));

            foodCategory.items = filteredItems;

            return foodCategory.items?.length > 0;
        }

        return true;
    }), [text]);

    console.log(filteredFoodCategories);

    return (
        <ScrollView style={styles.container}>
            <TextInput
                label="Buscar produto"
                value={text}
                mode="outlined"
                left={<TextInput.Icon icon="search" />}
                onChangeText={text => setText(text)}
            />
            <Text>Categorias: </Text>
            <List.AccordionGroup expandedId={text ? filteredFoodCategories[0]?.id : undefined}>
                {
                    !filteredFoodCategories.length ?
                    <Text>Nenhum alimento encontrado com aquele nome</Text>
                    : filteredFoodCategories.map(foodCategory => (
                        <List.Accordion style={{ marginVertical: 5 }} title={foodCategory.name} id={foodCategory.id}>
                            {
                                foodCategory.items?.map(food => (
                                    <List.Item onPress={() => showFoodInformation(food)} left={props => <List.Icon icon="fast-food" />} title={food.name} id={food.id} />
                                ))
                            }

                        </List.Accordion>
                    ))
                }
            </List.AccordionGroup>
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