import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="settings-outline" size={30} color="green" />
                <Text style={styles.title}>Configuración de usuario</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
  },
});