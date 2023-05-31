import { View,Text, StyleSheet, Dimensions,TouchableOpacity } from "react-native"
import { Avatar } from 'react-native-paper';
import { AvatarImageSource } from "react-native-paper/lib/typescript/src/components/Avatar/AvatarImage";


const {width} = Dimensions.get("screen");

type Props = {
    text: string;
    backgroundColor: string;
    image: AvatarImageSource;
    onPress: VoidFunction;

}

export function FoodCard(props:Props){
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: props.backgroundColor }]} onPress={props.onPress}>
            <Text style= {styles.text}>{props.text}</Text>
            <Avatar.Image size={width / 4} source={props.image} style={{ backgroundColor: "transparent" }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 16,
        width: width / 2 - 20,
        minHeight: width / 2 - 20,
        backgroundColor: "#000",
        borderRadius: 8,
        alignItems: "center",
        rowGap: 10
    },
    text: {
        color: "#fff",
        fontSize:22,
        fontWeight: "bold",
        textAlign: "center",
    }
    

})