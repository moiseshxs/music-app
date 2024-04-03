import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
    },

    //FORM STYLE
    areaForm: {
        flex: 2,
    },
    areaInput: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#414141',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textInput: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    //BOTAO STYLE
    areaBotao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        height: 50,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#1ED760',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBotao: {
        fontWeight: 'bold',
    },

    areaNada: {
        flex: 3
    },
});