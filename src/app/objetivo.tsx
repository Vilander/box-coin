import { View, Text} from 'react-native'
import { router } from 'expo-router'    
import { PageHeader } from '@/components/PageHeader'

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
        </View>
    )
}