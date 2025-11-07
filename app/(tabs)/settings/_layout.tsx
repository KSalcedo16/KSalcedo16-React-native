import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="account" options={{ headerShown: true, title: 'Mi Cuenta' }} />
      <Stack.Screen name="notifications" options={{ headerShown: true, title: 'Notificaciones' }} />
    </Stack>
  );
}