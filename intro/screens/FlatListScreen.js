import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useState } from 'react'

class Producto {
  constructor(id, titulo, descripcion, precio) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

export const productos = [
  new Producto(1, 'Camiseta', 'Camiseta de algodón', 19),
  new Producto(2, 'Pantalones', 'Pantalones vaqueros', 49),
  new Producto(3, 'Tenis', 'Zapatos deportivos', 89),
  new Producto(4, 'Chaqueta', 'Chaqueta impermeable', 79),
]

const FlatListScreen = () => {
  const [listaProductos, setListaProductos] = useState(productos)
  return (
    <View style={styles.lista}>
      <FlatList
        data={listaProductos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.titulo}</Text>
            <Text>{item.descripcion}</Text>
            <Text>${item.precio}</Text>
            <Text> Ver detalles </Text>
    </View>
  )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
  
    },

    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
})

export default FlatListScreen