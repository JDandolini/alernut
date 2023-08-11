import { useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { foodCategories } from "../api/mock/foodCategories";
import { FoodCard } from "../components/FoodCard";
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FoodStackParamList, ProtectedTabParamList } from "../routes/AppRoutes";

type Props = CompositeScreenProps<
    NativeStackScreenProps<FoodStackParamList, "FoodStackMain">,
    BottomTabScreenProps<ProtectedTabParamList>
>;

export default function FoodCategorySelectionScreen({ navigation }: Props) {
    const [text, setText] = useState("");

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

    return (
        <ScrollView style={styles.container}>
            <Text>Categorias: </Text>
            <View style={styles.row}>
            {
                foodCategories.map(foodCategory => (
                    <FoodCard 
                        key={foodCategory.id}
                        onPress={() => navigation.navigate("FoodSelection", { 
                            category: foodCategory.name,
                            foods: foodCategory.items
                        })} 
                        text={foodCategory.name} 
                        backgroundColor={foodCategory.color} 
                        image={foodCategory.image}
                     />
                ))
            }
            </View>

            
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
    row: {
        flexDirection: "row",
        columnGap: 8,
        marginVertical: 5,
        flexWrap: "wrap",
        rowGap: 8
    }

})