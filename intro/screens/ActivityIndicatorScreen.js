import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';

export default function ActivityIndicatorScreen() {
  const [cargando, setCargando] = useState(false); 
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [mensajePrompt, setMensajePrompt] = useState('Presiona "Acción" para comenzar');

  const manejarCarga = () => { //Se ejecuta cuando presionas "Acción".
    setCargando(true);
    setMostrarContenido(false);
    setMensajePrompt('Cargando... por favor espera');
    //Activa el spinner, oculta el mensaje final y cambia el texto del prompt
    setTimeout(() => {
      setCargando(false);
      setMostrarContenido(true);
      setMensajePrompt('¡Acción completada!');
    }, 3000);
  };
  const cancelarCarga = () => {
    setCargando(false);
    setMostrarContenido(false);
    setMensajePrompt('Carga cancelada');
  };
  //Si presionas, se detiene y muestra un mensaje de cancelación
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Practica: Activity Indicator</Text>
      <Text style={styles.prompt}>{mensajePrompt}</Text>

      <View style={styles.botones}>
        <Button color="#119000ff" title="Acción" onPress={manejarCarga} />
        <View style={{ width: 10 }} />
        <Button color="#ff0909ff" title="Cancelar" onPress={cancelarCarga} /> 
      </View>

      {cargando && (
        <ActivityIndicator size="large" color="#0075c8ff" style={styles.indicador}/>
      )}
      {mostrarContenido && (
        <Text style={styles.contenido}> ¡¡ Acción realizada :D!!</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffffff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000000ff',
  },
  prompt: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3448faff',
  },
  botones: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    fontWeight: '600',
  },
});