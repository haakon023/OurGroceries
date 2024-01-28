import { Image, Pressable, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native"
import { StyleSheet } from 'react-native';

export default function ProductCard(props) {
    const { colors } = useTheme();
    const handlePress = () => {
        props.clickEvent(props.data);
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? colors.active : colors.card,
                        marginTop: 10,
                        flexDirection: 'row',

                    }]}
            >

                <Image source={{ uri: props.data.imageUrl }}
                    style={{ width: 50, height: 50 }} />
                <View>
                    <Text style={colors.text}>{props.data.title}</Text>
                    <Text style={colors.text} >{props.data.cost}</Text>
                </View>
            </Pressable>

        </View>



    )

}

const styles = StyleSheet.create({
    container: {
        color: 'white',
    },
    cardText: {
        color: 'white'
    }
});