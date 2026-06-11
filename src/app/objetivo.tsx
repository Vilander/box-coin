import { useState } from 'react'
import { Alert, View, Text} from 'react-native'
import { router } from 'expo-router'    
import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import {Button} from '@/components/Button'
import { InputCurrency } from '@/components/InputCurrency'
import { useLocalSearchParams } from 'expo-router'
import { useBoxcoinDatabase } from '@/database/useBoxcoinDatabase'



export default function Objetivo (){
    const [nomeMeta, setNomeMeta] = useState("")
    const [valor, setValor] = useState<number | null>(0)

    const params = useLocalSearchParams<{id?: string}>()
    const boxcoinDatabase = useBoxcoinDatabase()

    function fnUserSave(){
        if (!nomeMeta.trim() || valor === null || valor <=0 ){
            return Alert.alert("Atenção!","Preencha todos os campos.")
        }
        if(params.id){

        }else{
            salvarDadosBanco()
        }
    }

    async function salvarDadosBanco(){
        try{
            boxcoinDatabase.create({
                name:nomeMeta,
                amount: Number(valor)
            })
            Alert.alert("Sucesso", "Meta criada com sucesso!", [
                {
                    text:"Ok", onPress: () => router.back()
                }
            ])
        }catch (error){
            Alert.alert("Erro","Falha ao criar nova meta")
            console.log(error)
        }
    }

    return(
        <View style={{flex:1, padding: 24, gap: 32}}>  
            <PageHeader 
                titulo = "Meta"
                subtitulo='Economize para alcançar sua meta financeira.'
            />

            <View style={{marginTop: 32, gap: 24}}>  
                <Input 
                    label="Nome da Meta" 
                    placeholder='Ex: Viagem para Europa' 
                    value={nomeMeta}
                    onChangeText={setNomeMeta}
                />
                <InputCurrency 
                    label='Valor alvo (R$)'
                    value={valor}
                    onChangeValue={setValor}
                />


                <Button 
                    titulo="Salvar"
                    onPress={() => fnUserSave()}
                />
            </View>
        </View>
    )
}