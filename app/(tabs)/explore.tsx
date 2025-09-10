import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const initialRegion = {
  latitude: 3.8827,
  longitude: -76.9926,
  latitudeDelta: 0.04,
  longitudeDelta: 0.0421,
};

export default function ExploreScreen() {
  const [region, setRegion] = useState(initialRegion);

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
        initialRegion={initialRegion}
        provider={undefined}
        region={region}
      >
        <Marker
          coordinate={{
            latitude: 3.8827,
            longitude: -76.9926,
          }}
          title="Ubicación del Camión"
          description="Aquí se encuentra el camión de basura"
        />
      </MapView>
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
