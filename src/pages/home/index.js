import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import axios from "axios";



import ARTIST_DATA from "../../../components/artista";
import ALBUM_DATA from "../../../components/album";



const Album = ({ nome, foto, artistas }) => (
  <TouchableOpacity style={styles.espaco} onPress={() => alert("Album")}>
    <Image source={foto} style={styles.albumFoto} />
    <View style={styles.areaAlbumText}>
      <Text style={styles.nomeArtista}>{nome}</Text>
      <Text style={styles.ParecidoComTitulo}>
        Álbum •
        {artistas}
      </Text>
    </View>
  </TouchableOpacity>
);


export default function Home() {
  const [album, setAlbum] = useState([]);
  const navigation = useNavigation();
  const albumPegador = async () => {

    const axiosConfig = {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded"
        "Accept": "application/json"
      },
    };

    try {
      const response = await axios.get(
        "http://localhost:9000/api/albumIndex",
        null,
        axiosConfig
      );
      setAlbum(response.data.albums)
    } catch (error) {
      console.error("Erro", error);
      return false;
    }
  };
  useState(() => {
    albumPegador();
  })

  console.log(album, "CONSOLE DO ALBUM")

  // Mapeando os artistas nos álbuns
  const albumsWithArtists = ALBUM_DATA.map((album) => {
    const artistasDoAlbum = album.artistas
      ? album.artistas.map((artistId) => {
        const artista = ARTIST_DATA.find((a) => a.id === artistId);
        return artista;
      })
      : [];

    return {
      ...album,
      artistas: artistasDoAlbum,
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-content" />

          <View style={styles.areaHeader}>
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
              <View style={styles.areaPerfil}></View>
            </TouchableOpacity>
          </View>

          <View style={styles.areaRecentes}>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
            </View>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
            </View>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}></View>
              </View>
            </View>
          </View>

          <View style={styles.areaParecidoCom}>
            <View style={styles.areaParecidoComBanda}>
              <View style={styles.areaParecidoComEsq}>
                <View style={styles.areaParecidoComFoto}></View>
              </View>

              <View style={styles.areaParecidoComDir}>
                <View style={styles.areaParecidoComTitulo}>
                  <Text style={styles.ParecidoComTitulo}>Parecido com</Text>
                </View>
                <View style={styles.areaParecidoComNome}>
                  <Text style={styles.ParecidoComNome}>Pablo</Text>
                </View>
              </View>
            </View>

            <View style={styles.areaAlbum}>
              <FlatList
                data={album}
                renderItem={({ item }) => (
                  <Album
                    nome={item.nome_album}
                    foto={item.fotoAlbum}
                    artistas={item.artistas}
                  />
                )}
                keyExtractor={(item) => item.idAlbum}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>
                Sugestões de álbuns para você
              </Text>
            </View>

            <View style={styles.areaAlbum}>
              <FlatList
                data={album}
                renderItem={({ item }) => (
                  <Album
                    nome={item.nome_album}
                    foto={item.fotoAlbum}
                    artistas={item.artistas}
                  />
                )}
                keyExtractor={(item) => item.idAlbum}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>
                Suas músicas estão com saudade
              </Text>
            </View>

            <View style={styles.areaAlbum}>
              <FlatList
                data={album}
                renderItem={({ item }) => (
                  <Album
                    nome={item.nome_album}
                    foto={item.fotoAlbum}
                    artistas={item.artistas}
                  />
                )}
                keyExtractor={(item) => item.idAlbum}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>Suas playlists</Text>
            </View>

            <View style={styles.areaAlbum}>
              <FlatList
                data={album}
                renderItem={({ item }) => (
                  <Album
                    nome={item.nome_album}
                    foto={item.fotoAlbum}
                    artistas={item.artistas}
                  />
                )}
                keyExtractor={(item) => item.idAlbum}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
