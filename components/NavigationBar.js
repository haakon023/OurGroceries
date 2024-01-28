import { useTheme } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from "../screens/ProductsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background
                }
            }}>
            <Tab.Screen
                name="Home"
                component={ProductsScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) =>
                        (
                            <MaterialCommunityIcons
                                name="food"
                                color={color}
                                size={size}
                            />)
                    }
                }
            />
            <Tab.Screen
                name="ShoppingListScreen"
                component={ShoppingScreen}
                options={
                    {
                        tabBarIcon: ({ color, size }) =>
                        (
                            <MaterialCommunityIcons
                                name="format-list-checks"
                                color={color}
                                size={size}
                            />),
                        title: "My shopping lists"
                    }

                }
            />
            <Tab.Screen name="Profile"
                component={ProfileScreen} 
                options={
                    {
                        tabBarIcon: ({ color, size }) =>
                        (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />),
                        title: "Profile"
                    }

                }/>
        </Tab.Navigator>

    )
}