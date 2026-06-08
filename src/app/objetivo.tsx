import { View, Text} from 'react-native'
import { router } from 'expo-router'    
import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import {Button} from '@/components/Button'
import { InputCurrency } from '@/components/InputCurrency'


export default function Objetivo (){
    return(
        <View style={{flex:1, padding: 24, gap: 32}}>  
            <PageHeader 
                titulo = "Meta"
                subtitulo='Economize para alcançar sua meta financeira.'
            />

            <View style={{marginTop: 32, gap: 24}}>  
                <Input label="Nome da Meta" placeholder='Ex: Viagem para Europa' />
                <InputCurrency label='Valor alvo (R$)' value={0} />
                <Button 
                    titulo="Salvar"
                    onPress={() => console.log("Salvar Meta")}
                />
            </View>
        </View>
    )
}