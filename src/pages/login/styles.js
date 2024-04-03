import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 20,
    },

    //PARTE DE CIMA STYLE
    areaCima: {
        flex: 3,
    },
    areaLogo: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    areaTexto: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    //OPCOES STYLE
    areaOpcoes: {
        flex: 3,
    },
    areaBotao: {
        flex: 1,  
    },
    botaoInscreva: {
        height: 50,
        borderRadius: 100,
        backgroundColor: '#1ED760',
        alignItems:'center',
        justifyContent: 'center',
    },
    textBotaoIncreva: {
        fontWeight: 'bold',
    },
    botao: {
        height: 50,
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#595959',
    },
    textBotao: {
        color: 'white',
        fontWeight: 'bold',
    },
    areaEntrar: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
});