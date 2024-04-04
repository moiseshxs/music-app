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
    areaCabecalho: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    areaPerfil: {
        backgroundColor: 'pink',
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    areaTitulo: {
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    titulo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    //INPUT STYLE
    input: {
        borderRadius: 5,
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 20,
    },
});