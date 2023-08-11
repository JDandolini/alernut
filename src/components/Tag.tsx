import { View, Text, StyleSheet } from "react-native";

type Props = {
    text: string;
    color?: string;
}

export function Tag({ text, color }: Props) {
    const backgroundColor = color ? color : "green";

    return (
        <View style={[styles.container,  { backgroundColor }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        borderRadius: 8,
        alignSelf: "center",
        marginHorizontal: 2
    },
    text: {
        color: "#fff"
    }
});