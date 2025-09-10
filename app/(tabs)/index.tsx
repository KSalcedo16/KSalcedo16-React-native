import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  // Función para navegar a la pantalla de exploración
  const handleViewLiveRoute = () => {
    console.log('Navegando a la ruta en vivo');
    router.push('/(tabs)/explore');
  };

  return (
    // SafeAreaView asegura que el contenido no invada la barra de estado
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Encabezado de bienvenida con espacio adecuado */}
        <View style={styles.header}>
          <ThemedText type="title" style={styles.titleText}>¡Hola! Te damos la bienvenida</ThemedText>
          <ThemedText style={styles.subtitleText}>
            Mira la ubicación del camión de basura en tiempo real.
          </ThemedText>
        </View>

        {/* Tarjeta principal para ver el mapa */}
        <ThemedView style={styles.mainCard}>
          <Ionicons name="map-outline" size={60} color="#007AFF" style={styles.icon} />
          <ThemedText type="subtitle" style={styles.cardTitle}>Mapa</ThemedText>
          <ThemedText style={styles.cardText}>
            Sigue la ruta del camión de basura y conoce su ubicación exacta.
          </ThemedText>
          <TouchableOpacity style={styles.liveButton} onPress={handleViewLiveRoute}>
            <ThemedText style={styles.liveButtonText}>
              Ver la ruta en vivo <Ionicons name="arrow-forward" size={16} color="#fff" />
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 40,
   
  },
  header: {
    marginBottom: 40,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  mainCard: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  liveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  liveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});