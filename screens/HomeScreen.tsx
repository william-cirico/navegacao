import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../routes/StackNavigationRoutes";

type Props = NativeStackScreenProps<StackParamList, "HomeScreen">

export default function HomeScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Home Page 🏠</Text>
            <Button title="Produto 01" onPress={() => navigation.navigate("DetailsScreen", {
                id: 1,
                description: "Mouse Gamer"
            })} />
            <Button title="Produto 02" onPress={() => navigation.navigate("DetailsScreen", {
                id: 2,
                description: "Teclado Gamer"
            })} />
        </View>
    );
}