import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { AppStackParamList } from "../routes/AppRoutes";

type Props = NativeStackScreenProps<AppStackParamList, "FoodDetails">;

export function FoodDetailsScreen({ route }: Props) {
    const { food } = route.params;    

    return (
        <View>
            <Text>{food.name}</Text>
            <Text>Produto contém ingrediente alergênico. Alergênicos: {food.allergens.join(", ")}
            Caso você não tenha certeza se pode consumir este produto, consulte um médico ou profissional de saúde antes de consumi-lo. 
            </Text>
        </View>
    );
}