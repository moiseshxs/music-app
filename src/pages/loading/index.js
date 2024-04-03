import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export default function App() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Entypo name="spotify" size={150} color="#1ED760" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },

});