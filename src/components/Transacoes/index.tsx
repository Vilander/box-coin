import {View, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { TransacoesTypes } from "@/utils/TransacoesTypes";


export type TransacaoProps = {
    id: string,
    value: string,
    date: string,
    descricao: string,
    tipo: TransacoesTypes,
}

type Props ={
    data:TransacaoProps,
    onRemove: () => void
}

export function Transacoes({ data, onRemove}: Props){
    return(
        <View style={styles.container}>
            <MaterialIcons 
                name={
                    data.tipo === TransacoesTypes.Input ? 'arrow-upward' : 'arrow-downward'
                }
                size={20}
                color={
                    data.tipo === TransacoesTypes.Input ? colors.green[900] : colors.red[400]
                }
            />
            <View style={styles.info}>
                <Text style={styles.value}>{data.value}</Text>
                <Text style={styles.descricao} numberOfLines={1}>
                    {data.date} {data.descricao && `- ${data.descricao}`}
                </Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
                <MaterialIcons name='close' size={18} color={colors.gray[500]}/>
            </TouchableOpacity>
        </View>
    )
}