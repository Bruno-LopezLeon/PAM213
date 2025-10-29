import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Switch, StatusBar, Alert, TextInput, Button, Platform} from 'react-native';

const SPLASH_IMAGE = require('../assets/IMAGES/MFDOOM.jpg');
const MAIN_THEME = require('../assets/IMAGES/FightClub.jpg');
const LOGO_IMAGE = require('../assets/IMAGES/PollosHs.jpg');
const emailRegex = /\S+@\S+\.\S+/;

export default function ImageBackgroundScreen() {
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const mostrarAlerta = () => {
      if (nombre.trim() === '' && mail.trim()) {
      Alert.alert("Error", "Por favor, Ingresa el nombre.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(mail)) {
      Alert.alert("Error!", "Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Error!", "Debes aceptar los términos y condiciones para continuar.");
      return;}


        Alert.alert("¡Registro Exitoso!", "Nombre:" + nombre + "\nCorreo:" + mail ,
            [{text: 'OK'},
           {text: 'Cancelar'}]
      );

  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ImageBackground
      source ={SPLASH_IMAGE}
      resizeMOde="cover"
      imageStyle={styles.splashImageStyle}
      style={styles.splashBackground}>
      <StatusBar barStyle="light-content" backgroundColor= "transparent"  translucent />
      <View style={styles.splashOverlay}>
        <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.splashTitle}>Practica</Text>
        <Text style={styles.splashSubtitle}>Cargando repaso...</Text>
      </View>
      </ImageBackground>
    );
}
  return (
    <ImageBackground
    source={MAIN_THEME}
    resiceMOde="cover"
    imageStyle={styles.mainImageStyle}
    style={styles.mainBackground}
    >
    <StatusBar barStyle="light-content" backgroundColor= "transparent"  translucent />
    <View style={styles.mainOverlay}>

      <Text style={styles.welcome}>BIENVENIDO AL REGISTRO!</Text>
        <Text style={styles.splashTitle}>Registro</Text>
        <Text style={styles.splashSubtitle}>Nombre:</Text>
        <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}/>

        <Text style={styles.splashSubtitle}>Correo:</Text>
        <TextInput
              style={styles.input}
              placeholder="Gmail"
              value={mail}
              onChangeText={setMail}
              keyboardType='email-address'/>

        <View style={styles.switchRow}>
        <Text style={styles.splashSubtitle}>Acepto los términos y condiciones</Text>
        <Switch
          onValueChange={setAceptaTerminos}
          value={aceptaTerminos}
        />
        </View>
        <Button title="Registrarse" onPress={mostrarAlerta} />

    </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
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
  mainBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImageStyle: {
    opacity: 0.9,
  },
  mainOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)', 
    padding: 20,
    borderRadius: 12,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#57575748',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-evenly',
    width: '100%',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
color: '#ffffffff',}
});
