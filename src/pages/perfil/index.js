import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData !== null) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Erro ao obter informações do usuário", error);
      }
    };

    getUserData();
  }, []);

  const salvar = async () => {
    const dadosUser = {
      username: username,
    };

    const axiosConfig = {
      headers: {
        /*         'Accept': 'application/json',
         */ "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:9000/api/clienteUpdate",
        dadosUser,
        axiosConfig
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao atualizar", error);
      return false;
    }
  };

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
                <Text style={styles.textNome}>{user ? user.username : ""}</Text>
              </View>

              <View style={styles.areaSeguidor}>
                <Text style={styles.textSeguidor}>
                  <Text style={styles.bold}>6 </Text> seguidores{" "}
                  <Text style={styles.bold}>• 22 </Text> seguindo
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.areaEditar}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <View style={styles.botao}>
                <Text style={styles.textBotao}>Editar</Text>
              </View>
            </TouchableOpacity>

            <Modal
              visible={isModalVisible}
              onRequestClose={() => setIsModalVisible(false)}
              animationType="slide"
              presentationStyle="overFullScreen"
              transparent="true"
            >
              <View style={styles.areaModal}>
                <View style={styles.cimaModal}></View>
                <View style={styles.areaModalHeader}>
                  <View style={styles.areaModalBotao}>
                    <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                      <Text style={styles.textBotaoModal}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.areaModalTitle}>
                    <Text style={styles.textTitleModal}>Editar perfil</Text>
                  </View>

                  <View style={styles.areaModalBotao2}>
                    <TouchableOpacity onPress={salvar()}>
                      <Text style={styles.textBotaoModal}>Salvar</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.areaRestoModal}>
                  <View style={styles.areaFotoModal}>
                    <View style={styles.fotoModal}></View>
                  </View>

                  <View style={styles.areaFormModal}>
                    <View style={styles.areaNomeModal}>
                      <Text style={styles.textInputModal}>Nome</Text>
                    </View>
                    <View style={styles.areaInputModal}>
                      <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View style={styles.areaPlaylist}></View>
      </View>
    </SafeAreaView>
  );
}
