import { Text, StyleSheet, View, Button, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';

export default function BotonesScreen() {
    const [modoOscuro, setModoOscuro]=useState(false);
    
    const tema = modoOscuro ? styles.darkTheme : styles.lightTheme; // operador ternario
    const texto = modoOscuro ? styles.darkText : styles.lightText;

    return (
      <View style={[styles.container, tema]}>
        <Text style={[styles.title, texto]}>Pantalla de Botones y Switches</Text>
        
        <View style={styles.section}>
            <Text style={[styles.subtitulo, texto]}>Botones</Text>
          
        <View style={styles.buttonContainer}>
            <Button title="Botón azul" color='blue'onPress={() => {}} />
            <Button title="Botón verde" color='green'onPress={() => {}} />
            <Button title="Botón rojo" color='red'onPress={() => {}} />
            <Button title="Botón amarillo" color='yellow'onPress={() => {}} />
            <Button title="Botón morada" color='purple'onPress={() => {}} />
        </View>
        </View>
        <View style={styles.section}>
            <Text style={[styles.subtitulo, texto]}>Switch para Modo Oscuro</Text>
        <View style={styles.switchRow}>
            <Text style={[styles.switchText, texto]}>Modo Oscuro</Text>
            <Switch value={modoOscuro} onValueChange={(value) => setModoOscuro(!modoOscuro)}/>
        </View>
        </View>

        <View style={styles.foteer}>
            <Text style={[styles.estadoTexto, texto]}>Modo Oscuro: {modoOscuro ? 'Activado' : 'Desactivado'}</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  section: {
    marginTop: 30,
    alignItems: 'center',
    width: '30%',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-evenly',
    width: '100%',
    borderRadius: 8,
  },

  switchText: {
    fontSize: 18,
  },

  footer: {
    marginTop: 40,
  },

  estadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  lightTheme: {
    backgroundColor: '#fafafa',
  },

  darkTheme: {
    backgroundColor: '#000000ff',
  },

  lightText: {
    color: '#000',
  },

  darkText: {
    color: '#fff',
  },
});