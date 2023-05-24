import { useMemo, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import { TextInput } from 'react-native-paper';
import { List } from 'react-native-paper';

export default function FoodSelectionScreen() {
    const [text, setText] = useState("");

    const foodCategories = [
        {
            id: "1", name: "Cereais, pães e tubérculos", items: [
                { id: "1a", name: "Arroz", allergens: ["soja"] },
                { id: "2a", name: "Trigo", allergens: ["glúten", "soja","cevada", "centeio","aveia"] },
                { id: "3a", name: "Aveia", allergens: ["glúten", "trigo","cevada", "centeio"] },
                { id: "3a", name: "Milho", allergens: ["soja", "girassol"] },
            ]
        },
        { id: "2", name: "Hortaliças" },
        { id: "3", name: "Frutas" , items: [
            { id: "1a", name: "Laranja"},
            { id: "2a", name: "Limão"},
            { id: "3a", name: "Tangerina"},
            { id: "4a", name: "Acerola", allergens: ["látex natural"] },
            { id: "5a", name: "Pêssego", allergens: ["látex natural"] },
            { id: "6a", name: "Ameixa", allergens: ["látex natural"] },
            { id: "7a", name: "Cereja", allergens: ["látex natural"] },
            { id: "8a", name: "Abacaxi", allergens: ["látex natural"] },
            { id: "9a", name: "Banana", allergens: ["látex natural"] },
            { id: "10a", name: "Manga", allergens: ["látex natural"] },
            { id: "11a", name: "Mamão", allergens: ["látex natural"] },
            { id: "12a", name: "Maçã", allergens: ["látex natural"] },
            { id: "13a", name: "Coco"},
            { id: "14a", name: "Maracujá", allergens: ["látex natural"] },
            { id: "15a", name: "Kiwi", allergens: ["látex natural"] },
            { id: "16a", name: "Melão", allergens: ["látex natural"] },
            { id: "17a", name: "Melancia"},
            { id: "18a", name: "Uva", allergens: ["látex natural"] },
            { id: "19a", name: "Figo", allergens: ["látex natural"] },
            { id: "20a", name: "Abacate", allergens: ["látex natural"] },
            { id: "21a", name: "Lichia", allergens: ["látex natural"] },
        ]
        },
        { id: "4", name: "Leguminosas" },
        { id: "5", name: "Carnes e ovos" },
            { id: "6", name: "Leite e derivados",items: [
                { id: "1a", name: "Leite (vaca, cabra, ovelha)", allergens: ["Leite","lactose"] },
                { id: "2a", name: "Queijos", allergens: ["Leite","lactose"] },
                { id: "3a", name: "Creme azedo (sour cream)", allergens: ["Leite","lactose"] },
                { id: "4a", name: "Manteiga", allergens: ["Leite","lactose"] },
                { id: "5a", name: "Iogurte", allergens: ["Leite","lactose"] },
                { id: "6a", name: "Creme de leite", allergens: ["Leite","lactose"] },
                { id: "7a", name: "Leite condensado", allergens: ["Leite","lactose"] },
                { id: "8a", name: "Leite em pó", allergens: ["Leite","lactose"] },
                { id: "9a", name: "Sorvete", allergens: ["Leite","lactose"] },
                { id: "10a", name: "Coalhada", allergens: ["Leite","lactose"] },
                { id: "11a", name: "Requeijão", allergens: ["Leite","lactose"] },
                { id: "12a", name: "Nata", allergens: ["Leite","lactose"] },
        ]},

        { id: "7", name: "Óleos e gorduras" },
        { id: "8", name: "Açúcares e doces" },
    ];

    function showFoodInformation(food) {
        if (food.allergens?.length > 0) {
            Alert.alert("Atenção", `Este alimento contém ${food.allergens.join()}. Por favor, verifique cuidadosamente a lista de ingredientes antes de consumir.`)
        } else {
            Alert.alert("Atenção", "Esse alimento não possui alérgeno(s)!");
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
                    <Text>Após uma análise minuciosa dos ingredientes, verificamos que o produto que você buscou está livre de alérgenos conhecidos! 🚫🌰🥛🍞</Text>
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