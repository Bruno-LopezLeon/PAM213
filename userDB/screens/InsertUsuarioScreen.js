import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,StyleSheet, Alert,ActivityIndicator,Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioControllers';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleGuardar = async () => {
    if (guardando) return;
    if (!nombre.trim()) {
      Alert.alert('Error', 'El nombre es obligatorio');
      return;
    }

    try {
      setGuardando(true);
      if (idEditando) {
        // UPDATE
        await controller.actualizarUsuario(idEditando, nombre);
        Alert.alert('Éxito', 'Usuario actualizado correctamente');
        setIdEditando(null); // Salir de modo edición
      } else {
        // INSERT
        await controller.crearUsuario(nombre);
        Alert.alert('Éxito', 'Usuario creado correctamente');
      }
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };


  const handleEditar = (usuario) => {
    setNombre(usuario.nombre);
    setIdEditando(usuario.id);
  };

  // Función para cancelar edición si el usuario se arrepiente
  const cancelarEdicion = () => {
    setNombre('');
    setIdEditando(null);
  }

  // Función eliminar
  const handleEliminar = (id) => {
    Alert.alert(
      'Eliminar',
      '¿Estás seguro de eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive', 
          onPress: async () => {
            try {
              await controller.eliminarUsuario(id);
            } catch (error) {
              Alert.alert('Error', error.message);
            }
          }
        }
      ]
    );
  };

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userNumber}>
          <Text style={styles.userNumberText}>{index + 1}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.nombre}</Text>
          <Text style={styles.userId}>ID: {item.id}</Text>
          <Text style={styles.userDate}>
            {item.fechaCreacion ? new Date(item.fechaCreacion).toLocaleDateString() : 'Sin fecha'}
          </Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => handleEditar(item)} style={styles.editBtn}>
          <Text style={styles.btnTextSmall}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEliminar(item.id)} style={styles.deleteBtn}>
          <Text style={styles.btnTextSmall}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}> INSERT & SELECT + CRUD</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona del INSERT */}

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> 
          {idEditando ? 'Editar Usuario' : 'Nuevo Usuario'}
        </Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity 
              style={[styles.button, { flex: 1, backgroundColor: idEditando ? '#FF9500' : '#007AFF' }]} 
              onPress={handleGuardar}
              disabled={guardando}>
              <Text style={styles.buttonText}>
                {guardando ? 'Procesando...' : (idEditando ? 'Actualizar' : 'Agregar')}
              </Text>
            </TouchableOpacity>
            
            {idEditando && (
                <TouchableOpacity style={[styles.button, { backgroundColor: '#999' }]} onPress={cancelarEdicion}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            )}
        </View>
      </View>



      {/* Zona del SELECT */}

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>

          <TouchableOpacity 
            style={styles.refreshButton}
            onPress={ cargarUsuarios } >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
           ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}


      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userInfoContainer: { 
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    marginRight: 10, 
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
  mvcInfo: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  mvcTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 8,
  },
  mvcText: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
    color: '#1976D2',
  },
  actionButtons: { 
    flexDirection: 'row', 
    gap: 5,
  },
  editBtn: { 
    backgroundColor: '#36d80eff', 
    padding: 8, 
    borderRadius: 5,
    justifyContent: 'center',

  },
  deleteBtn: { 
    backgroundColor: '#FF3B30', 
    padding: 8, 
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnTextSmall: { 
    color: '#fff', 
    fontSize: 12, 
    fontWeight: 'bold' 
  },
  emptyText: { 
    textAlign: 'center', 
    color: '#999', 
    marginTop: 20 
  },
});