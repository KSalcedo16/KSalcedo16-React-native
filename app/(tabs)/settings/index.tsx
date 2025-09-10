import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const router = useRouter();

  const handleAccountPress = () => {
    router.push('/(tabs)/settings/account');
  };

  const handleNotificationsPress = () => {
    router.push('/(tabs)/settings/notifications');
  };

  const handleHelpPress = () => {
    console.log('Botón de Ayuda presionado');
  };

  const handleLogoutPress = () => {
    console.log('Botón de Cerrar Sesión presionado');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Ajustes</ThemedText>
        </ThemedView>

        {/* Sección de la cuenta */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Cuenta</ThemedText>
          <TouchableOpacity style={styles.itemContainer} onPress={handleAccountPress}>
            <View style={styles.itemLeft}>
              <Ionicons name="person-outline" size={24} style={styles.itemIcon} />
              <ThemedText style={styles.itemText}>Mi Cuenta</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} style={styles.itemIcon} />
          </TouchableOpacity>
        </ThemedView>

        {/* Sección de la aplicación */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Aplicación</ThemedText>
          <TouchableOpacity style={styles.itemContainer} onPress={handleNotificationsPress}>
            <View style={styles.itemLeft}>
              <Ionicons name="notifications-outline" size={24} style={styles.itemIcon} />
              <ThemedText style={styles.itemText}>Notificaciones</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} style={styles.itemIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer} onPress={handleHelpPress}>
            <View style={styles.itemLeft}>
              <Ionicons name="help-circle-outline" size={24} style={styles.itemIcon} />
              <ThemedText style={styles.itemText}>Ayuda</ThemedText>
            </View>
            <Ionicons name="chevron-forward" size={24} style={styles.itemIcon} />
          </TouchableOpacity>
        </ThemedView>

        {/* Sección de la aplicación */}
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Acerca de</ThemedText>
          <ThemedView style={styles.aboutContainer}>
            <ThemedText type="caption" style={styles.appVersionText}>
              Versión 1.0.0
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Botón de cerrar sesión */}
        
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
    gap: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  itemIcon: {
    color: '#888',
  },
  itemText: {
    fontSize: 16,
  },
  aboutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  appVersionText: {
    textAlign: 'center',
    color: '#999',
  },
  logoutButton: {
    backgroundColor: 'tomato',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
