import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Checkbox, IconButton, List } from 'react-native-paper';
import { AppStackParamList, ProtectedTabParamList } from "../routes/AppRoutes";
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Allergy, useAllergy } from "../contexts/AllergyContext";

type Props = CompositeScreenProps<
    BottomTabScreenProps<ProtectedTabParamList, 'MyAlergies'>,
    NativeStackScreenProps<AppStackParamList>
>;

export default function AlergiesSelectionScreen({ navigation, route }: Props) {
    const [allergies, setAlergies] = useState<Allergy[]>([
        { id: "1", name: "Amendoim" },
        { id: "2", name: "Amêndoa" },
        { id: "3", name: "Aveia" },
        { id: "4", name: "Avelã" },
        { id: "5", name: "Castanha de Caju" },
        { id: "6", name: "Castanha do Pará" },
        { id: "7", name: "Centeio" },
        { id: "8", name: "Cevada" },
        { id: "9", name: "Crustáceos" },
        { id: "10", name: "Lactose" },
        { id: "11", name: "Glúten" },
        { id: "12", name: "Latex natural" },
        { id: "13", name: "Leite de todos os animais mamiferos" },
        { id: "14", name: "Macâmia" },
        { id: "15", name: "Nozes" },
        { id: "16", name: "Ovos" },
        { id: "17", name: "Peixes" },
        { id: "18", name: "Pinoli" },
        { id: "19", name: "Pistache" },
        { id: "20", name: "Soja" },
        { id: "21", name: "Trigo" },
    ]);

    const { hasAllergy, toggleAllergy } = useAllergy();


    return (
        <ScrollView style={styles.container}>
            <View>
                <IconButton
                    icon="arrow-back-outline"
                    iconColor="black"
                    size={32}
                    onPress={navigation.goBack}
                />
            </View>
            <Text>Selecione suas alergias e/ou intolerâncias:</Text>
            {
                allergies.map(allergy => (
                    <List.Item
                        style={styles.item}
                        key={allergy.id}
                        onPress={() => { }}
                        title={allergy.name}
                        left={props => <Checkbox
                            {...props}
                            status={hasAllergy(allergy) ? 'checked' : 'unchecked'}
                            onPress={() => toggleAllergy(allergy)}
                        />}
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
    item: {
        backgroundColor: "#ccc",
        borderBottomColor: "black",
        borderBottomWidth: 1
    }
})