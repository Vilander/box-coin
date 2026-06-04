import { View, Text} from 'react-native'
import { router } from 'expo-router'    
import { PageHeader } from '@/components/PageHeader'
import { Input } from '@/components/Input'
import {Button} from '@/components/Button'

export default function Objetivo (){
    return(
        <View style={{flex:1, padding: 24, gap: 32}}>  
            <PageHeader 
                titulo = "Meta"
                subtitulo='Economize para alcançar sua meta financeira.'
                rightButton={{
                    icon:'edit',
                    onPress: () => console.log("editar Meta")
                }}
            />

            <View style={{marginTop: 32, gap: 24}}>  
                <Input label="Nome da Meta" placeholder='Ex: Viagem para Europa' />
                <Button 
                    titulo="Salvar"
                    onPress={() => console.log("Salvar Meta")}
                />
            </View>
        </View>
    )
}