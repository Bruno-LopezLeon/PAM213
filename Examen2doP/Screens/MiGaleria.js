import { Text, StyleSheet, View,ScrollView, ImageBackground, Image, TouchableOpacity, StatusBar,Button } from 'react-native'
import React, {UseState} from 'react';

export default function MiGaleria() {

    return (
        <View style={styles.container}>
        <Text style={styles.Titulo}>MiGaleria</Text>
    <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.Content}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        scrollEnabled={true}>
        
        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Jaboncito</Text>

        <Text>Una foto de Fight Club</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Fight Club \n- Detalles: Una pelicula de accion, protagonizada por Brad Pitt y Edward Norton.\n- Año: 1999",
            [{text: 'Cerrar'}])} color="#ff7af2ff"/>

        <Text style={styles.TituloIMG}>MFDoom</Text>

        <Text>Portada de album de MFDoom</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: MFDoom \n- Detalles: Un album producido por MFDoom.\n- Año: 2003",
            [{text: 'Cerrar'}])} color="#0a7300ff"/>

        </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    Titulo:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20,
    },
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    scroll: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4ff',
    width: '100%',
    },
    TituloIMG:{
        fontSize:20,
        fontWeight:'bold',
    },
})