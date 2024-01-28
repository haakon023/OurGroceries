import { Button, Text, View, StyleSheet} from 'react-native';

export default function GroceryDetails(props) {
    function test()
    {
        console.log()
    }

    return (
        <View style={styles.modal}>
            <Text>The item id is : {props.data.id}</Text>

            <Button title="testing" onPress={test}></Button>
        </View>

    )
}

const styles = StyleSheet.create(
    
        {
            modal:{
                height: '50%',
                backgroundColor: 'blue',
                marginTop: 'auto'
            }
        }
)