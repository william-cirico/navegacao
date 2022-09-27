import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../routes/StackNavigationRoutes";

type Props = NativeStackScreenProps<StackParamList, "HomeScreen">

export default function HomeScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Home Page 🏠</Text>
            <Button title="Ir para a página de detalhes do produto" onPress={() => navigation.navigate("DetailsScreen")} />
        </View>
    );
}