import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const getUserData = async () => {
        try {
          const userData = await AsyncStorage.getItem('user');
          if (userData !== null) {
            setUser(JSON.parse(userData));
          }
        } catch (error) {
          console.error("Erro ao obter informações do usuário", error);
        }
      };
  
      getUserData();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-conten" />
            <View style={styles.container}>
                <View style={styles.areaHeader}>
                    <View style={styles.areaCabecalho}>
                        <View style={styles.areaPerfil}>

                        </View>
                        <View style={styles.areaTitulo}>
                        <Text style={styles.ParecidoComNome}>{user ? user.username : ''}</Text>
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