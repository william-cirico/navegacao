import { NavigatorScreenParams, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../routes/StackNavigationRoutes";

type Props = NativeStackScreenProps<StackParamList, "DetailsScreen">;

export default function DetailsScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Tela de Detalhes do Produto</Text>
            <Text>Id do Produto: 1</Text>
            <Text>Descrição: Mouse Gamer</Text>
            <Button 
                title="Voltar para a tela inicial" 
                onPress={() => navigation.navigate("HomeScreen")} 
            />
        </View>
    );
}