import ShoppingLists from "../components/ShoppingList/ShoppingList";
import ShoppingListDetails from "../components/ShoppingList/ShoppingListDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function ShoppingScreen({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ShoppingLists"
                component={ShoppingLists}
            ></Stack.Screen>
            <Stack.Screen name="ShoppingListDetails"
                component={ShoppingListDetails}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}