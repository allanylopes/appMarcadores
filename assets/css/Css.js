import {StyleSheet} from "react-native";
const css = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    map:{
        height: '70%',
        
    },
    search:{
        height: '30%'
    },
    distancia:{
        marginTop: -40
    },
    marcador:{
        width: 90,
        height: 70,
        backgroundColor: '#3589',
        flexDirection: 'column',
        borderRadius: 8,
        alignItems: 'center',
    },
    marcadorImage:{
        width: 90,
        height: 45,
        resizeMode: 'cover',
    }
    
});

export {css};