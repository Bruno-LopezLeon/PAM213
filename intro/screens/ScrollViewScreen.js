import { Text, StyleSheet, View, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'

export default function ScrollViewScreen() {
  const [items, setItems] = useState(["Opcion 1", "Opcion 2", "Opcion 3"]);

  const agregaropcion = () => {
    const nuevoOpcion = `Opcion ${items.length + 1}`;
    setItems([...items, nuevoOpcion]);
  };

  const borrarUltima = () => {
    if (items.length > 3){
      setItems(items.slice(0, -1));
    }else{
      alert("No se pueden borrar las opciones iniciales");}
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>ScrollView</Text>
        <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.Content}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        scrollEnabled={true}
        >
          {items.map((item, index) => (
            <View key={index} style={styles.box}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
          <Button title="Agregar Opción" onPress={agregaropcion} color="#59e946ff"/>
          <View style={styles.space}/>
          <Button title="Borrar Última Opción" onPress={borrarUltima} color="#dc2626ff"/>
          </View>
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000000ff',
  },
  scroll: {
    flex: 1,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#e4e4e4ff',
  },
  Content: {
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
   box: {
    backgroundColor: '#99caffff',
    width: '90%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: { 
    fontSize: 18, 
    color: '#1F2937',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  space: {
    width: 20,
  },
})