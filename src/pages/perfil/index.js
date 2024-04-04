import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, ScrollView, StatusBar } from 'react-native';
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

  {/* <Text style={styles.ParecidoComNome}>{user ? user.username : ''}</Text> */ }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>

        <View style={styles.areaHeader}>
          <View style={styles.areaCabecalho}>
            <View style={styles.areaFoto}>
              <View style={styles.foto}></View>
            </View>

            <View style={styles.areaInfos}>
              <View style={styles.areaNome}>
                <Text style={styles.textNome}>{user ? user.username : ''}</Text>
              </View>

              <View style={styles.areaSeguidor}>
                <Text style={styles.textSeguidor}>
                  <Text style={styles.bold}>6 </Text> seguidores <Text style={styles.bold}>• 22 </Text> seguindo
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.areaEditar}>
            <View style={styles.botao}>
              <Text style={styles.textBotao}>Editar</Text>
            </View>
          </View>

        </View>
        <View style={styles.areaPlaylist}>

        </View>
      </View>
    </SafeAreaView>
  );
}