import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native';
import styles from './styles';

export default function Home() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle="light-conten" />

          <View style={styles.areaHeader}>
            <View style={styles.areaPerfil}>

            </View>
          </View>

          <View style={styles.areaRecentes}>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
            </View>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
            </View>
            <View style={styles.areaPlaylistRecente}>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
              <View style={styles.playlist}>
                <View style={styles.playlistFoto}>

                </View>
              </View>
            </View>
          </View>

          <View style={styles.areaParecidoCom}>
            <View style={styles.areaParecidoComBanda}>
              <View style={styles.areaParecidoComEsq}>
                <View style={styles.areaParecidoComFoto}>

                </View>
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
              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>ye</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Kanye West</Text>
                </View>
              </View>

              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>UTOPIA</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Travis Scott</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>Sugestões de álbuns para você</Text>
            </View>

            <View style={styles.areaAlbum}>
              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>ye</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Kanye West</Text>
                </View>
              </View>

              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>UTOPIA</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Travis Scott</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>Suas músicas estão com saudade</Text>
            </View>

            <View style={styles.areaAlbum}>
              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>ye</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Kanye West</Text>
                </View>
              </View>

              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>UTOPIA</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Travis Scott</Text>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.areaRecomendacao}>
            <View style={styles.areaTituloRecomendacao}>
              <Text style={styles.textRecomendacao}>Suas playlists</Text>
            </View>

            <View style={styles.areaAlbum}>
              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>ye</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Kanye West</Text>
                </View>
              </View>

              <View style={styles.areaCapaAlbum}>
                <View style={styles.albumFoto}>

                </View>
                <View style={styles.areaAlbumText}>
                  <Text style={styles.nomeArtista}>UTOPIA</Text>
                  <Text style={styles.ParecidoComTitulo}>Álbum • Travis Scott</Text>
                </View>
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}