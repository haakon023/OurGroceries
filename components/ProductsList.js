import { Button, FlatList, Pressable, Text, TextInput, Modal, View, StyleSheet} from "react-native";
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'nativewind';
import { useTheme } from "@react-navigation/native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from "./ProductCard";
import GroceryDetails from "./GroceryDetails";


export default function ProductsList({ navigation }) {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [searchText, onChangeText] = React.useState("");
    const [productData, setProductData] = React.useState();
    const [productModal, setProductModal] = React.useState({ show: false, data: null });
    const { colors } = useTheme();
    const textRef = React.useRef(null);

    function OnProductPressed(item) {
        setProductModal({ show: !productModal.show, data: item })
    }

    function OnProductSwiped() {

    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function FetchProducts() {
        await delay(1000); // wait 1 sec for testing UI

        return data =
            [
                {
                    id: "asiudhasdasd",
                    title: "Norvegia Ost",
                    cost: 100,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasddaq123",
                    title: "Coop kokt Skinke",
                    cost: 40,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasd",
                    title: "Battery fresh",
                    cost: 27,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasd1414",
                    title: "Prior Egg",
                    cost: 40,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasd1412asd",
                    title: "Extra Egg",
                    cost: 25,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasdag1",
                    title: "Pepsi maks",
                    cost: 25,
                    imageUrl: "https://reactjs.org/logo-og.png"
                },
                {
                    id: "asiudhasd512hasdx",
                    title: "Urge",
                    cost: 25,
                    imageUrl: "https://reactjs.org/logo-og.png"
                }
            ]
    }

    function SearchForItem() {
        console.log("hwei")
    }

    useEffect(() => {
        const getProducts = async () => {
            products = await FetchProducts();
            setProductData(products);
        }
        getProducts();
    }, []);

    return (
        <View className='dark:bg-slate-800 flex-1 flex-col'>
            <Pressable className="w-full" onPress={focusSearch}>
                <View className="flex-row dark:bg-slate-700">
                    <MaterialCommunityIcons name="magnify" size='35' color={colors.primary}></MaterialCommunityIcons>
                    <TextInput editable
                        ref={textRef}
                        value={searchText}
                        placeholder="Search for product"
                        onChangeText={onChangeText}
                        transparent={true}
                        className="w-full text-slate-900 m-50 dark:text-white "
                        mode="outlined"
                        onEndEditing={SearchForItem}
                    >

                    </TextInput>
                </View>
            </Pressable>

            <Modal
                transparent={true}
                animationType="slide"
                visible={productModal.show}
                presentationStyle='pageSheet'
                onRequestClose={() => {
                    setProductModal({ show: !productModal.show, data: null });
                }}>
                   

                <GroceryDetails style={styles.modal} data={productModal.data}>

                </GroceryDetails>

            </Modal>


            <FlatList className="px-2 mt-2" data={productData}
                renderItem={({ item }) => <ProductCard clickEvent={OnProductPressed} data={item} keyExtractor={item => item.id}></ProductCard>}>
            </FlatList>

        </View>
    )
    function focusSearch() {
        textRef.current.focus();
    }

}


const styles = StyleSheet.create({
    modal: {
      top: '50%',
      margin:'auto',
    },
  });