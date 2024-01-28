import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GroceryDetails from '../components/GroceryDetails';
import ProductsList from '../components/ProductsList'
import { View } from 'react-native';
const Stack = createNativeStackNavigator();

export default function ProductsScreen() {
    return (
            <Stack.Navigator >
                <Stack.Screen name="ProductList"
                    component={ProductsList}
                ></Stack.Screen>
                <Stack.Screen name="GroceryItem"
                    component={GroceryDetails}
                >
                </Stack.Screen>
            </Stack.Navigator>

    )

}