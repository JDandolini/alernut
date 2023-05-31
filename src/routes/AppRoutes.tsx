import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GeneralInformationScreen from "../screens/GeneralInformationScreen";
import MainScreen from "../screens/MainScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import FoodSelectionScreen from "../screens/FoodSelectionScreen";
import { Text } from "react-native";
import FoodCategorySelectionScreen from "../screens/FoodCategorySelectionScreen";
import { Food } from "../types/food";
import { FoodDetailsScreen } from "../screens/FoodDetailsScreen";

export type AppStackParamList = {
    Welcome: undefined;
    Main: undefined;
    FoodCategorySelection: undefined;
    FoodSelection: {
        category: string;
        foods: Food[];
    },
    FoodDetails: {
        food: Food;
    }
}

const AppStack = createNativeStackNavigator<AppStackParamList>();

export type AppTabParamList = {
    Main: undefined;
    GeneralInformation: undefined;
    MyAlergies: undefined;
    EmergencyAlert: undefined;
    Exit: undefined;
}

const AppTab = createBottomTabNavigator<AppTabParamList>();

export function AppTabRoutes() {
    return (
        <AppTab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 13
                },
                headerShown: false
            }}
        >
            <AppTab.Screen
                options={{
                    tabBarButton: () => null
                }}
                name="Main"
                component={MainScreen}
            />
            <AppTab.Screen
                name="EmergencyAlert"
                component={GeneralInformationScreen}
                options={{
                    tabBarLabel: "Emergência",
                    tabBarIcon: ({ color, size }) => <Octicons name="alert" size={size} color={"red"} />,
                    tabBarLabelStyle: { color: "red" },
                    tabBarActiveBackgroundColor: "black"
                }}
            />
            <AppTab.Screen
                name="MyAlergies"
                component={GeneralInformationScreen}
                options={{
                    tabBarLabel: "Minhas Alergias",
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
                }}
            />
            <AppTab.Screen
                name="GeneralInformation"
                component={GeneralInformationScreen}
                options={{
                    tabBarLabel: "Informações",
                    tabBarIcon: ({ color, size }) => <AntDesign name="infocirlceo" size={size} color={color} />,
                }}
            />
            <AppTab.Screen
                name="Exit"
                component={WelcomeScreen}
                options={{
                    tabBarLabel: "Sair",
                    tabBarIcon: ({ color, size }) => <Ionicons name="exit-outline" size={size} color={color} />,
                }}
            />
        </AppTab.Navigator>
    )
}

export function AppRoutes() {
    return (
        <AppStack.Navigator
            initialRouteName="Main"
        >
            <AppStack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
            <AppStack.Screen options={{
                headerShown: false
            }} name="Main" component={AppTabRoutes} />
            <AppStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodCategorySelection"
                component={FoodCategorySelectionScreen}
            />
            <AppStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodSelection"
                component={FoodSelectionScreen}
            />
            <AppStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodDetails"
                component={FoodDetailsScreen}
            />
        </AppStack.Navigator>
    );
}