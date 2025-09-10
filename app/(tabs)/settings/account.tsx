import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AccountScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">
        Mi Cuenta
      </ThemedText>
      <ThemedText style={styles.text}>
        Aquí irán las opciones de la cuenta del usuario.
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