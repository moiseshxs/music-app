import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { Axios } from 'axios';

export default function Entrar() {

    const [email_cliente, setEmail_cliente] = useState('');
    const [senha_cliente, setSenha_cliente] = useState('');
    const navigation = useNavigation();

    const login = async () => {

        const dadosUser = {
            'email_cliente': email_cliente,
            'senha_cliente': senha_cliente,
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
                            onChangeText={setEmail_cliente} value={email_cliente}
                        />
                    </View>
                    <View style={styles.areaInput}>
                        <Text style={styles.textInput}>Senha_cliente</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={setSenha_cliente} value={senha_cliente}
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