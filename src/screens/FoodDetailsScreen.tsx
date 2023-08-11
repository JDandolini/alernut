import { View, Text } from "react-native";
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FoodStackParamList, ProtectedTabParamList } from "../routes/AppRoutes";
import { Avatar } from "react-native-paper";

type Props = CompositeScreenProps<
    NativeStackScreenProps<FoodStackParamList, "FoodDetails">,
    BottomTabScreenProps<ProtectedTabParamList>
>;

export function FoodDetailsScreen({ route }: Props) {
    const { food } = route.params;

    return (
        <View>
            <Text>{food.name}</Text>
            <Avatar.Image source={{ uri: food.imageURL }} />
            <Text>Produto contém ingrediente alergênico. Alergênicos: {food.allergens.map(allergen => allergen.name).join(", ")}. Caso você não tenha certeza se pode consumir este produto, consulte um médico ou profissional de saúde antes de consumi-lo.
            </Text>
        </View>
    );
}