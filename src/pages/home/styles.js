import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#101012',
    },

    Text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }, 
    //Profile
    areaProfile: {
        //flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 20,
    },

    areaFoto: {
        flex: 1,
    },
    iconPerfil: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },

    areaText: {
        flex: 4,
    },
    TextWelcome: {
        fontSize: 20,
        textAlign: 'left',
    }, 
    areaConfig: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'none',
        borderRadius: 50,
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: 'white',
    },

    //Artist
    areaArtists: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'start',
        paddingStart: 10,
      },      

    areaTitle: {
        paddingTop: 10,
        marginBottom: 20,
    },

    areaPics: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    artists: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    cont: {
        marginRight: 20,
    },
      
    nameArt: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5,
    },
      
      
    //recentes
    areaRecentes: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'start',
        paddingStart: 10,
    },

    areaUsual: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nameAlbum: {
        fontSize: 20,
        textAlign: 'left',
        marginTop: 8,
    },
    album: {
        height: 130,
        width: 130,
    },
    nameArtist: {
        fontSize: 15,
        color: 'grey',
    },
});