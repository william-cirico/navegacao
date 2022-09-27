import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export type StackParamList = {
    HomeScreen: undefined;
    DetailsScreen: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export function StackNavigationRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="DetailsScreen"
        >
            <Stack.Screen 
                name="HomeScreen"
                options={{
                    title: "Página Inicial",
                    headerTintColor: "red",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 32
                    },
                    headerStyle: {
                        backgroundColor: "#000",
                    }
                }}
            >
                {(props) => <HomeScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen 
                name="DetailsScreen"
                options={{ 
                    title: "Detalhes do Produto"
                }}
            >
                {(props) => <DetailsScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}