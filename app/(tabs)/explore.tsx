// app/(tabs)/explore.tsx

import { ThemedText } from '@/components/ThemedText'; // Asegúrate de tener este componente
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { LocationObject, LocationSubscription } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { WebView } from 'react-native-webview'; // ⭐️ Importamos WebView


const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc2GWASnDZ_W-ZTaJFbAc55obvSvTVmF-ozasdVngc2Wt9Fsw/viewform?usp=sharing&ouid=110049369674140331703';

const BUENAVENTURA_REGION: Region = {
  latitude: 3.8879,
  longitude: -77.0345,
  latitudeDelta: 0.04,
  longitudeDelta: 0.04,
};

export default function ExploreScreen() {
  const [currentLocation, setCurrentLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>(BUENAVENTURA_REGION);
  
  
  const [modalVisible, setModalVisible] = useState(true);

  
  useEffect(() => {
    let locationSubscription: LocationSubscription | null = null;

    const startLocationWatch = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación denegado.');
        return;
      }
      
      try {
        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 5000,
            distanceInterval: 10,
          },
          (newLocation) => {
            setCurrentLocation(newLocation);
            setRegion({
              latitude: newLocation.coords.latitude,
              longitude: newLocation.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          }
        );
      } catch (error) {
        setErrorMsg('Error al iniciar el rastreo GPS.');
      }
    };

    startLocationWatch();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  const handleZoomIn = () => {
    setRegion((prev) => ({ ...prev, latitudeDelta: prev.latitudeDelta / 2, longitudeDelta: prev.longitudeDelta / 2 }));
  };

  const handleZoomOut = () => {
    setRegion((prev) => ({ ...prev, latitudeDelta: prev.latitudeDelta * 2, longitudeDelta: prev.longitudeDelta * 2 }));
  };

  return (
    <ThemedView style={styles.container}>
      
     
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          
          setModalVisible(false);
        }}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          
          <View style={styles.modalHeader}>
            <ThemedText type="subtitle" style={{color: 'black'}}>Formulario Requerido</ThemedText>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="white" />
            </TouchableOpacity>
          </View>

          
          <WebView 
            source={{ uri: GOOGLE_FORM_URL }} 
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator style={{ position: 'absolute', top: '50%', left: '50%' }} size="large" />
            )}
          />
        </SafeAreaView>
      </Modal>

      
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
      >
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
            title="Mi Posición"
            pinColor="blue"
          />
        )}
      </MapView>

      <View style={styles.zoomControls}>
        
        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.zoomButton, { backgroundColor: '#34C759', marginBottom: 10 }]}>
           <Ionicons name="document-text-outline" size={24} color="white" />
        </TouchableOpacity>

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
  
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  }
});