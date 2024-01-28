import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, useColorScheme } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import NavigationBar from './components/NavigationBar';
const Stack = createNativeStackNavigator();


export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? MyThemeDark : MyTheme}>
      <NavigationBar></NavigationBar>
    </NavigationContainer>

  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(39, 55, 77)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const MyThemeDark = {
  dark: true,
  colors: {
    primary: 'rgb(221, 230, 237)',
    background: 'rgb(39, 55, 77)',
    card: 'rgb(82, 109, 130)',
    active: 'rgb(82, 109, 110)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(157, 178, 191)',
    notification: 'rgb(255, 69, 58)',
  },
};