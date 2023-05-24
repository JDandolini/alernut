import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';


export default function GeneralInformationScreen() {
    return (
        <View style={styles.container}>
                <Image style={styles.logo} resizeMode="cover" source={require("../../assets/logo.png")} />
            <Text style={styles.title}>Informação Geral</Text>
            <Button 
                buttonColor="#fff"  
                textColor="#d22ccc" 
                labelStyle={styles.buttonLabel} 
                mode="contained" 
            >
                Entrar
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d22ccc",
        padding: 16,
    },
    logo: {
        height: 150,
        width: "100%"
    },
    title: {
        fontSize: 50,
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 130
    },
    buttonLabel: {
        fontWeight: "bold",
        fontSize: 18
            }
     
})

