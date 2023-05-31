import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { AppStackParamList } from "../routes/AppRoutes";

type Props = NativeStackScreenProps<AppStackParamList, "FoodDetails">;

export function FoodDetailsScreen({ route }: Props) {
    const { food } = route.params;    

    return (
        <View>
            <Text>{food.name}</Text>
            <Text>Alergênicos: {food.allergens.join(", ")}</Text>
        </View>
    );
}