import React from 'react';
import { Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Artist() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-conten" />
            <View style={styles.container}>
                <View style={styles.areaForm}>
                    <View style={styles.areaInput}>
                        <Text style={styles.textInput}>E-mail ou nome de usuário</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.areaInput}>
                        <Text style={styles.textInput}>Senha</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                </View>

                <View style={styles.areaBotao}>
                    <View style={styles.botao}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.textBotao}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.areaNada}></View>
            </View>
        </SafeAreaView>
    );
}