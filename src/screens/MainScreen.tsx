import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, IconButton } from 'react-native-paper';
import { AppStackParamList } from "../routes/AppRoutes";

type Props = NativeStackScreenProps<AppStackParamList, "Main">;

export default function MainScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="cover" source={require("../../assets/logo.png")} />

            <Text style={styles.text}>Escanei seu produto</Text>

            <Image style={styles.scanner} resizeMode="contain" source={require("../../assets/scanner.png")} />

            <Button
                buttonColor="#CE26CC"
                textColor="#fff"
                labelStyle={styles.buttonLabel}
                mode="contained"
                style={styles.button}
            >
                Escanear
            </Button>

            <Text style={styles.textPrimary}>OU</Text>

            <Text style={styles.text}>Selecione seu produto</Text>

            <Button
                buttonColor="#60AEC2"
                textColor="#fff"
                labelStyle={styles.buttonLabel}
                mode="contained"
                style={[styles.button, { marginTop: 20 }]}
                icon="search"
                onPress={() => navigation.navigate("FoodCategorySelection")}
            >
                Procurar
            </Button>


        </View>
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