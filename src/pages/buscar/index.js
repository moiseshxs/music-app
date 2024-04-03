import React from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Library() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-conten" />
            <View style={styles.container}>
                <View style={styles.areaHeader}>
                    <View style={styles.areaCabecalho}>
                        <View style={styles.areaPerfil}>

                        </View>
                        <View style={styles.areaTitulo}>
                            <Text style={styles.titulo}>Buscar</Text>
                        </View>
                    </View>

                    <View style={styles.areaInput}>
                        <TextInput
                        style={styles.input}
                            placeholder='O que você quer ouvir?'
                            placeholderTextColor={'black'}
                        />
                    </View>
                </View>
                <ScrollView>




                </ScrollView>
            </View>
        </SafeAreaView>
    );
}