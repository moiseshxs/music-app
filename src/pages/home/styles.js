import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 20,
    },

    //HEADER STYLE
    areaHeader: {
        paddingVertical: 10,
        justifyContent: 'center',
    },
    areaPerfil: {
        backgroundColor: 'pink',
        height: 40,
        width: 40,
        borderRadius: 100,
    },

    //RECENTES STYLE
    areaRecentes: {
        paddingVertical: 10,
    },
    areaPlaylistRecente: {
        marginBottom: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playlist: {
        backgroundColor: '#292929',
        height: 55,
        width: '49%',
        borderRadius: 10,
    },
    playlistFoto: {
        height: '100%',
        width: '35%',
        borderTopStartRadius: 10,
        borderEndStartRadius: 10,
        backgroundColor: 'pink',
    },

    //PARECIDO COM STYLES
    areaParecidoCom: {
        paddingVertical: 10,
    },
    areaParecidoComBanda: {
        height: 70,
        marginBottom: 20,
        flexDirection: 'row',
    },
    areaParecidoComEsq: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
    },
    areaParecidoComFoto: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'pink',
    },
    areaParecidoComDir: {
        height: '100%',
        width: '80%',
        paddingHorizontal: 5,
        
    },
    areaParecidoComTitulo: {
        height: '35%',
        justifyContent: 'flex-end',
    },
    ParecidoComTitulo: {
        color: '#A6A6A6',
    },
    areaParecidoComNome: {
        height: '65%',
        justifyContent: 'flex-end',
    },
    ParecidoComNome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
    },
    areaAlbum: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    areaCapaAlbum: {
        
    },
    albumFoto: {
        height: 150,
        width: 150,
        
        backgroundColor: 'pink',
    },
    areaAlbumText: {
        height: 50,
        justifyContent: 'space-evenly',
    },
    nomeArtista: {
        color: 'white',
    },

    //RECOMENDACAO 

    areaRecomendacao: {
        paddingVertical: 10,
    },
    areaTituloRecomendacao: {
        height: 40,
    },
    textRecomendacao: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
    },
});