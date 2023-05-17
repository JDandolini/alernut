import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import MainScreen from "../screens/MainScreen";
import { Text } from "react-native"
import { IconButton, MD3Colors } from "react-native-paper";

export type AppStackParamList = {
    Welcome: undefined;
    Main: undefined;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
    return (
        <AppStack.Navigator
            initialRouteName="Welcome"
        >
            <AppStack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
            <AppStack.Screen options={{
                title: "",
                headerBackVisible: false,
                headerRight: () => <IconButton
                    icon="logout"
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            }} name="Main" component={MainScreen} />
        </AppStack.Navigator>
    );
}