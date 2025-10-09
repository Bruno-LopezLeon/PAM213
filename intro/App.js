/* 1. imports: Zona de imports */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React ,{useState} from 'react';

/* 2. Main: Zona de componentes */
export default function App() {
  const [contador, setContador]=useState(0); /* es una destructuracion */

  return (

    <View style={styles.container}>
      <Text> Contador: {contador}</Text>
      <Button title="Agregar" onPress={()=>setContador(contador+1)} color='#1c8a18ff' />
      <Button title="Quitar" onPress={()=>setContador(contador-1)} color='#d30000da' />
      <Button title="Reiniciar" onPress={()=>setContador(0)} color='#68e1ffff' />
      {/* <Button></Button> */}
      <StatusBar style="auto" />
    </View>

  );
}

/* 3. styles: Zona de estetica y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
