import { Text, StyleSheet, View,ScrollView, ImageBackground, Image, TouchableOpacity, StatusBar,Button } from 'react-native'
import React, {useEffect, useState} from 'react';

const FightClub = require('../assets/IMAGES/FightClub.jpg');
const MFDoom = require('../assets/IMAGES/MFDOOM.jpg');
const PollosHs = require('../assets/IMAGES/PollosHs.jpg');

export default function MiGaleria() {
const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
      source ={FightClub}
      resizeMOde="cover"
      imageStyle={styles.splashImageStyle}
      style={styles.splashBackground}>
      <StatusBar barStyle="light-content" backgroundColor= "transparent"  translucent />
      <View style={styles.splashOverlay}>
        <Image source={PollosHs} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.splashTitle}>Examen</Text>
        <Text style={styles.splashSubtitle}>Cargando MyGallery...</Text>
      </View>
      </ImageBackground>
    );
}

    return (
        <View style={styles.container}>
        <Text style={styles.Titulo}>MyGallery</Text>
    <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.Content}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        scrollEnabled={true}>
        
        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Jaboncito</Text>
        <Image source={FightClub} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>Una foto de Fight Club</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Fight Club \n- Detalles: Una pelicula de accion, protagonizada por Brad Pitt y Edward Norton.\n- Año: 1999",
            [{text: 'Cerrar'}])} color="#ff7af2ff"/>
        </View>
        
        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>MFDoom</Text>
        <Image source={MFDoom} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>Portada de album de MFDoom</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: MFDoom \n- Detalles: Un album producido por MFDoom.\n- Año: 2003",
            [{text: 'Cerrar'}])} color="#0a7300ff"/>
        </View>

        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Pollos Hermanos</Text>
        <Image source={PollosHs} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>Un fondo de pollos hermanos</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Pollos Hermanos \n- Detalles: Una polleria que esconde un secreto.\n- Año: 2011",
            [{text: 'Cerrar'}])} color="#df6c00ff"/>
        </View>

        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Landscape</Text>
        <Image source={{uri:'https://picsum.photos/300/300'}} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>Una bella vista</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Landscape \n- Detalles: Una hermosa vista con una montalla y el sol.\n- Año: 2025",
            [{text: 'Cerrar'}])} />
        </View>

        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Imagen 5</Text>
        <Image source={{uri:'https://picsum.photos/300/300'}} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>La imagen 5</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Imagen 4 \n- Detalles: Proximamente una imagen con mas detalles.\n- Año: 2025",
            [{text: 'Cerrar'}])} />
        </View>

        <View style={{alignItems:'center', marginTop:20, marginBottom:20}}>
        <Text style={styles.TituloIMG}>Imagen 6</Text>
        <Image source={{uri:'https://picsum.photos/300/300'}} style={{width:300, height:300, marginTop:10, marginBottom:20}}/>
        <Text style={styles.DescripcionIMG}>La imagen 6</Text>
        <Button title="Ver Detalles" onPress={() => alert("- Título: Imagen 6 \n- Detalles: Proximamente una imagen con mas detalles.\n- Año: 2025",
            [{text: 'Cerrar'}])} />

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
        backgroundColor:'#94acf4ac',
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
    splashBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  splashImageStyle: {
    opacity: 0.85,
  },
  splashOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: 24,
    borderRadius: 12,
  },
  splashTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
  },
  splashSubtitle: {
    color: '#dbeafe',
    marginTop: 8,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  DescripcionIMG:{
    fontSize:20,
    fontStyle:'italic',
    marginBottom:10,
  },
})