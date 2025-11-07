import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const buenaventuraCoords = {
  latitude: 3.8827,
  longitude: -76.9926,
};

const initialRegion = {
  ...buenaventuraCoords,
  latitudeDelta: 0.04,
  longitudeDelta: 0.0421,
};

export default function ExploreScreen() {
  const [region, setRegion] = useState(initialRegion);
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);

  useEffect(() => {
    (async () => {
      // Pedir permisos de ubicación
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación');
        return;
      }

      // Obtener ubicación inicial
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      setRegion({
        ...region,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      // Rastrear ubicación en tiempo real
      const subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 3000,
          distanceInterval: 2,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          setRegion((prev) => ({
            ...prev,
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
          }));
        }
      );

      return () => subscription.remove();
    })();
  }, []);

  const handleZoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    });
  };

  const handleZoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  return (
    <ThemedView style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {/* 📍 Marcador fijo de Buenaventura */}
        <Marker
          coordinate={buenaventuraCoords}
          title="Camión en Buenaventura"
          description="Ubicación del camión de basura"
        />

        {/* 📱 Tu posición actual */}
        {location && (
          <>
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              pinColor="blue"
              title="Tu posición actual"
            />

            {/* 🔗 Línea entre tu ubicación y Buenaventura */}
            <Polyline
              coordinates={[
                buenaventuraCoords,
                { latitude: location.latitude, longitude: location.longitude },
              ]}
              strokeColor="#007AFF" // azul iOS
              strokeWidth={3}
            />
          </>
        )}
      </MapView>

      {/* 🔍 Controles de zoom */}
      <View style={styles.zoomControls}>
        <TouchableOpacity onPress={handleZoomIn} style={styles.zoomButton}>
          <Ionicons name="add" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut} style={styles.zoomButton}>
          <Ionicons name="remove" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    gap: 10,
  },
  zoomButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
