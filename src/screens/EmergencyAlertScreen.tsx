import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { ProtectedTabParamList } from "../routes/AppRoutes";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';

type Props = BottomTabScreenProps<ProtectedTabParamList, "Main">;

const CONTACT_KEY = "contacts";

export default function EmergencyAlertScreen({ navigation }: Props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState<Location.LocationObject>(null);


    async function saveContact() {
        try {
            const contact = {
                name,
                phone
            }

            await AsyncStorage.setItem(CONTACT_KEY, JSON.stringify(contact));

            Alert.alert("Sucesso", "Cadastro salvo com sucesso!")
        } catch (error) {

        }
    }

    async function sendAlertMessage() {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await SMS.sendSMSAsync(
                [phone],
                `Mensagem de socorro. Localização: https://www.google.com/maps/place/${location?.coords?.latitude.toString().slice(1, 3)}%C2%B055'02.1%22S+${location?.coords?.longitude.toString().slice(1, 3)}%C2%B004'13.0%22W/@${location?.coords?.latitude},${location?.coords?.longitude},17z/data=!3m1!4b1!4m4!3m3!8m2!3d${location?.coords?.latitude}!4d${location?.coords?.longitude}?entry=ttu`,
              );
        } else {
            Alert.alert("Falha", "Não foi possivél enviar mensagem para este dispositivo!")
        }
    }
    async function getAllergies() {
        try {
            const value = await AsyncStorage.getItem(CONTACT_KEY);

            if (value !== null) {
                const { name, phone } = JSON.parse(value);
                setName(name);
                setPhone(phone);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllergies();
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    // 


    return (
        <View style={styles.container}>
            <TextInput
                mode="outlined"
                label="Nome"
                value={name}
                onChangeText={text => setName(text)}
            /><TextInput
                label="Telefone"
                mode="outlined"
                value={phone}
                onChangeText={text => setPhone(text)}
            />
            <Button mode="contained" onPress={saveContact}>
                Confirmar cadastro
            </Button>
            <Text> Caso o alerta seja acionado, seu contato receberá uma mensagem de texto e sua localização em tempo real</Text>

            <Button mode="contained" onPress={sendAlertMessage}>
                Acionar Alerta de emergência
            </Button>
            <Text>{location?.coords?.latitude} {location?.coords?.longitude}</Text>
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
        fontSize: 18,
    }

})