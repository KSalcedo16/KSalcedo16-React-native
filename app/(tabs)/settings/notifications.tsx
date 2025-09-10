import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotificationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">
        Notificaciones
      </ThemedText>
      <ThemedText style={styles.text}>
        Aquí irán las opciones para las notificaciones.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
});