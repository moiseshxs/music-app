import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


export default function App() {
    const navigation = useNavigation();

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((user) => {
                if (user) {
                    //usuario dentro do async passa pra home
                    setTimeout(() => {
                        navigation.navigate('Home');
                    }, 3000);
                } else {
                    //usuario nao encontrado manda pra fazer login
                    setTimeout(() => {
                        navigation.navigate('Login');
                    }, 3000);
                }
            })
            .catch((error) => {
                console.error('Erro ao acessar o AsyncStorage:', error);
                //se ouver erro navegue ao login
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 3000);
            });


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