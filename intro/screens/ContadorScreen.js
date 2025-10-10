/* 1. imports: Zona de imports */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState} from 'react';

/* 2. Main: Zona de componentes */
export default function App() {
  const [contador, setContador]=useState(0); /* es una destructuracion */

  return (

    <View style={styles.container}>

      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>
      <Button title="Agregar" onPress={()=>setContador(contador+1)} color='#1c8a18ff' />
      <Button title="Quitar" onPress={()=>setContador(contador-1)} color='#d30000da' />
      <Button title="Reiniciar" onPress={()=>setContador(0)} color='#68e1ffff' />
        </View>
        
      <StatusBar style="auto" />
    </View>

  );
}

/* 3. styles: Zona de estetica y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#35d711ff',
    fontSize: 30,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
    textShadowColor: '#00c80aff',
    textShadowRadius: 10,
  },
  texto2: {
    color: '#7f8bfaff',
    fontSize: 35,
    fontFamily: 'Courier New',
    fontWeight: '400',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    textShadowColor: '#aba9ffff',
    textShadowRadius: 10,
  },
  botonesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  }
});
