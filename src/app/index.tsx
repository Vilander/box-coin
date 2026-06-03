import { View, Text, Button } from "react-native";
import {router} from 'expo-router'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeHeader } from "@/components/HomeHeader";
import {Objetivo} from "@/components/Objetivo";
import { Lista } from "@/components/Lista";


const resumo = {
    total:"R$ 8.745,00",
    input:{
        label:"Entrada",
        value: "R$9.854,00"
    },
    output:{
        label:"Saída",
        value: "-R$1.754,00"
    }
}

const objetivos = [
    {
        id: "1",
        nome: "Comprar poltrona",
        porcentagem: "50%",
        meta: "R$2.000,00",
        atual: "R$ 1.000,00",
    },
    {
        id: "2",
        nome: "Relógio",
        porcentagem: "75%",
        meta: "R$1.00,00",
        atual: "R$ 700,00",
    },
    {
        id: "3",
        nome: "SmartTV",
        porcentagem: "45%",
        meta: "R$2.300,00",
        atual: "R$ 1.000,00",
    }
]

export default function Index() {
    const insets = useSafeAreaInsets
    return (
        <View style={{flex: 1}}>
            <HomeHeader data ={resumo}/>

            <Lista
                titulo='Metas'
                data={objetivos}
                renderItem={() => <Objetivo/>}
                emptyMensagem="Nenhuma meta encontrada"
                containerStyle={{paddingHorizontal: 24}}
            />
        </View>
    );
}