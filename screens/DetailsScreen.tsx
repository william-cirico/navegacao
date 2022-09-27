import { NavigatorScreenParams, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../routes/StackNavigationRoutes";

type Props = NativeStackScreenProps<StackParamList, "DetailsScreen">;

export default function DetailsScreen({ navigation, route }: Props) {
    const { id, description } = route.params;

    return (
        <View>
            <Text>Tela de Detalhes do Produto</Text>
            <Text>Id do Produto: {id}</Text>
            <Text>Descrição: {description}</Text>
            <Button 
                title="Voltar para a tela inicial" 
                onPress={() => navigation.navigate("HomeScreen")} 
            />
            <Button 
                title="Mudar o título" 
                onPress={() => navigation.setOptions({ title: description })}
            />
        </View>
    );
}