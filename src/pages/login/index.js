import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>

                <View style={styles.areaCima}>
                    <View style={styles.areaLogo}>
                        <Entypo name="spotify" size={60} color="white" />
                    </View>
                    <View style={styles.areaTexto}>
                        <Text style={styles.textTitle}>Milhões de músicas à sua escolha.</Text>
                        <Text style={styles.textTitle}>Grátis no Spotify.</Text>
                    </View>
                </View>

                <View style={styles.areaOpcoes}>
                    <View style={styles.areaBotao}>
                        <View style={styles.botaoInscreva}>
                            <Text style={styles.textBotaoIncreva}>Inscreva-se grátis</Text>
                        </View>
                    </View>
                    <View style={styles.areaBotao}>
                        <View style={styles.botao}>
                            <Text style={styles.textBotao}>Continuar com um número de telefone</Text>
                        </View>
                    </View>
                    <View style={styles.areaBotao}>
                        <View style={styles.botao}>
                            <Text style={styles.textBotao}>Continuar com o Google</Text>
                        </View>
                    </View>
                    <View style={styles.areaBotao}>
                        <View style={styles.botao}>
                            <Text style={styles.textBotao}>Continuar com o Facebook</Text>
                        </View>
                    </View>
                    <View style={styles.areaBotao}>
                        <View style={styles.botao}>
                            <Text style={styles.textBotao}>Continuar com a Apple</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.areaEntrar}>
                    <TouchableOpacity onPress={() => navigation.navigate("Entrar")}>
                        <Text style={styles.textBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}