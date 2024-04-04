import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 20,
    },

    //HEADER STYLE
    areaHeader: {
        flex: 1,
        paddingVertical: 10,
    },
    areaCabecalho: {
        flex: 2,
        flexDirection: 'row',
    },
    areaFoto: {
        flex: 1,
        justifyContent: 'center',
    },
    foto: {
        backgroundColor: 'pink',
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    areaInfos: {
        flex: 2,
        paddingTop: 10,
    },
    areaNome: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    areaSeguidor: {
        flex: 1,
    },
    textNome: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    textSeguidor: {
        fontSize: 15,
        color: '#A0A6A4',
    },
    bold: {
        color: 'white',
        fontWeight: 'bold',
    },

    areaEditar: {
        flex: 1,
        justifyContent: 'center',
    },
    botao: {
        borderWidth: 2,
        borderColor: '#707271',
        height: 30,
        width: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBotao: {
        color: 'white',
        fontWeight: 'bold',
    },

    //PLAYLIST STYLE
    areaPlaylist: {
        flex: 3,
        justifyContent: 'center',
    },
});