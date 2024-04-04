import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios } from 'axios';

export default function Entrar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const login = async () => {

        const dadosUser = {
            'email': email,
            'senha': senha,
        };

        const axiosConfig = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        };

        try {
            const response = await axios.post(
                "http://localhost:9000/api/clienteLogin",
                dadosUser,
                axiosConfig
            );
            if (response.data.success) {
                await AsyncStorage.setItem('user', JSON.stringify(response.data.cliente));
                navigation.navigate('Home');
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
            return false;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-conten" />
            <View style={styles.container}>
                <View style={styles.areaForm}>
                    <View style={styles.areaInput}>
                        <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail} value={email}
                        />
                    </View>
                    <View style={styles.areaInput}>
                        <Text style={styles.textInput}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={setSenha} value={senha}
                        />
                    </View>
                </View>

                <View style={styles.areaBotao}>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => {login()}}>
                            <Text style={styles.textBotao}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.areaNada}></View>
            </View>
        </SafeAreaView>
    );
}