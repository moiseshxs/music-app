import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import ARTIST_DATA from '../../../components/artista';
import ALBUM_DATA from '../../../components/album';

const Artist = ({ nome, foto }) => (
  
  <TouchableOpacity style={styles.cont} onPress={() => Stack.navigate('Artist')}>
    <Image source={foto} style={styles.artists} />
    <Text style={[styles.Text, styles.nameArt]}>{nome}</Text>
  </TouchableOpacity>
);

const Album = ({ nome, foto, artistas }) => (
  <TouchableOpacity style={styles.cont} onPress={() => alert('Album')}>
    <Image source={foto} style={styles.album} />
    <Text style={[styles.Text, styles.nameAlbum]}>{nome}</Text>
    <Text style={[styles.Text, styles.nameArtist]}>{artistas ? artistas.map(artist => artist.nome).join(', ') : ''}</Text>
  </TouchableOpacity>
);

export default function Home() {
  const Stack = useNavigation();

  // Mapeando os artistas nos álbuns
  const albumsWithArtists = ALBUM_DATA.map(album => {
    const artistasDoAlbum = album.artistas
      ? album.artistas.map(artistId => {
          const artista = ARTIST_DATA.find(a => a.id === artistId);
          return artista;
        })
      : [];

    return {
      ...album,
      artistas: artistasDoAlbum,
    };
  });

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <ScrollView>
                <StatusBar 
                    barStyle="light-conten"
                />
                <View style={styles.areaProfile}>
                    <View style={styles.areaFoto}>
                        <TouchableOpacity onPress={() => alert('Profile')}>
                            <Image
                                source={require('./img/perfil.png')}
                                style={styles.iconPerfil}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.areaText}>
                        <Text style={[styles.Text, styles.TextWelcome]}>Good morning, Moises</Text>
                    </View>

                    <View style={styles.areaConfig}>
                        <TouchableOpacity onPress={() => alert('Config')}><Text></Text></TouchableOpacity>
                    </View>
                </View>

                <View style={styles.areaRecentes}>
                    <View style={styles.areaTitle}>
                        <Text style={styles.Text}>The usual?</Text>
                    </View>

                    <View style={styles.areaUsual}>
                        <FlatList
                            data={ARTIST_DATA}
                            renderItem={({item}) => <Artist nome={item.nome} foto={item.foto} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.areaArtists}>
                    <View style={styles.areaTitle}>
                        <Text style={styles.Text}>Your favorite albums</Text>
                    </View>

                    <View style={styles.areaPics}>
                    <FlatList
                        data={albumsWithArtists}
                        renderItem={({ item }) => (
                        <Album nome={item.nomeAlbum} foto={item.fotoAlbum} artistas={item.artistas} />
                        )}
                        keyExtractor={item => item.idAlbum}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    </View>
                </View>

            </ScrollView>
            <StatusBar style="auto" />        
            </View>
        </SafeAreaView>
    );
}