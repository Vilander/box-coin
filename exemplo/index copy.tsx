import { View, Text } from "react-native";
import { colors } from "@/theme/colors";
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from "@expo-google-fonts/inter";

export default function Index() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
    });

    if (!fontsLoaded) {
        return null; 
    }

    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: colors.gray[900]
        }}>
            <Text style={{
                color: colors.orange[600],
                fontSize: 50,
                fontFamily: "Inter_400Regular" // Passado como String
            }}>
                Hello World
            </Text>
            
            <Text style={{
                color: colors.orange[600],
                fontSize: 50,
                fontFamily: "Inter_700Bold" // Passado como String
            }}>
                Hello World
            </Text>
        </View>
    );
}