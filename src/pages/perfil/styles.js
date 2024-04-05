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

    //MODAL STYLE
    areaModal: {
        flex: 1,
    },
    cimaModal:{
        flex: 1,
    },
    areaModalHeader: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 20,
        backgroundColor: '#101010',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    areaModalBotao: {
        flex: 1,
        justifyContent: 'center',
    },
    areaModalBotao2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    areaModalTitle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBotaoModal: {
        fontSize: 15,
        color: 'white',
    },
    textTitleModal: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    areaRestoModal: {
        flex: 10,
        backgroundColor: '#121212',
    },
    areaFotoModal: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fotoModal: {
        height: 150,
        width: 150,
        borderRadius: 100,
        backgroundColor: 'pink',
    },
    areaFormModal: {
        flex: 4,
        flexDirection: 'row',
        padding: 20,
        
    },
    areaNomeModal: {
        flex: 1,
    },
    textInputModal: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    areaInputModal: {
        flex: 2,
    },
    input: {
       fontSize: 15,
       color: 'white'
    },
});