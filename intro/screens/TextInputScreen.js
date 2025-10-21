import { Text, StyleSheet, View, Alert, TextInput, Button, Platform} from 'react-native'
import React, { useState} from 'react';

export default function TextInputScreen() {
  const [nombre, setNombre] = useState('');
  const [multexto, setMultexto] = useState('');
  const [contrasena, setContrasena] = useState('');
  const mostrarAlerta = () => {
    if (nombre.trim() === '') {
      if(Platform.OS === 'web'){
        alert('Por favor escribe tu nombre');
      }else{
        Alert.alert('Error', 'Por favor escribe tu nombre antes de continuar', 
          [{text: 'OK'},
           {text: 'Cancelar'}]
        );
      }
  }else{
      if(Platform.OS === 'web'){
        alert(`Hola, `+nombre+`!`);
      }else{
        Alert.alert('Saludos', `Hola, `+nombre+`!`, 
          [{text: 'OK'},
           {text: 'Cancelar'}]
        );
      }
  }
};
return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de TextInput</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}/>

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
        keyboardType='numeric'/>

        <TextInput 
        style={styles.input}
        placeholder="Multilínea"
        multiline={true}
        numberOfLines={4}
        value={multexto}
        onChangeText={setMultexto}/>

      <Button title="Saludar" onPress={mostrarAlerta} />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
  }

})