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
import { Text, View } from "react-native";
import FoodCategorySelectionScreen from "../screens/FoodCategorySelectionScreen";
import { Food } from "../types/food";
import { FoodDetailsScreen } from "../screens/FoodDetailsScreen";
import AlergiesSelectionScreen from "../screens/AlergiesSelectionScreen";
import { useAuth } from "../contexts/AuthContext";
import { AllergyProvider } from "../contexts/AllergyContext";
import EmergencyAlertScreen from "../screens/EmergencyAlertScreen";

export type FoodStackParamList = {
    FoodStackMain: undefined;
    FoodSelection: {
        category: string;
        foods: Food[];
    },
    FoodDetails: {
        food: Food;
    }
}

const FoodStack = createNativeStackNavigator<FoodStackParamList>();

export function FoodStackScreen() {
    return (
        <FoodStack.Navigator
            initialRouteName="FoodStackMain"
        >
    
            <FoodStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodStackMain"
                component={FoodCategorySelectionScreen}
            />
            <FoodStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodSelection"
                component={FoodSelectionScreen}
            />
            <FoodStack.Screen options={props => ({
                title: "",
                headerLeft: () => <Ionicons onPress={props.navigation.goBack} name="arrow-back-sharp" size={24} color="black" />,
                headerRight: () => <Text><Ionicons name="search" size={32} color="black" /> Selecione seu produto</Text>
            })}
                name="FoodDetails"
                component={FoodDetailsScreen}
            />
        </FoodStack.Navigator>
    );
}

export type ProtectedTabParamList = {
    Main: undefined;
    GeneralInformation: undefined;
    MyAlergies: undefined;
    EmergencyAlert: undefined;
    FoodCategorySelection: undefined;
}

const ProtectedTab = createBottomTabNavigator<ProtectedTabParamList>();

export function PrivateRoutes() {
    return (
        <AllergyProvider>
            <ProtectedTab.Navigator
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 13
                    },
                    headerShown: false
                }
                }
                initialRouteName="Main"
            >
                <ProtectedTab.Screen
                    name="EmergencyAlert"
                    component={EmergencyAlertScreen}
                    options={{
                        tabBarLabel: "Emergência",
                        tabBarIcon: ({ color, size }) => <Octicons name="alert" size={size} color={"red"} />,
                        tabBarLabelStyle: { color: "red" },
                        tabBarActiveBackgroundColor: "black"
                    }}
                />
                <ProtectedTab.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        tabBarLabel: "Início",
                        tabBarIcon: ({ color, size }) => <Octicons name="home" size={size} color={color} />,
                        tabBarLabelStyle: { color: "blue" }
                    }}
                />
                <ProtectedTab.Screen
                    name="MyAlergies"
                    component={AlergiesSelectionScreen}
                    options={{
                        tabBarLabel: "Minhas Alergias",
                        tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
                    }}
                />
                <ProtectedTab.Screen options={props => ({
                    tabBarButton: () => null
                })}
                    name="FoodCategorySelection"
                    component={FoodStackScreen}
                />
                <ProtectedTab.Screen
                    name="GeneralInformation"
                    component={GeneralInformationScreen}
                    options={{
                        tabBarButton: () => null
                    }}
                />
            
            </ProtectedTab.Navigator >
        </AllergyProvider>
    );
}

export function PublicRoutes() {
    return <WelcomeScreen />
}

export function AppRoutes() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <PrivateRoutes />
    }

    return <PublicRoutes />
}