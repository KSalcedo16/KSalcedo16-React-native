import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/ExternalLink';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#e4e723ff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/imagen.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">HELLO WORLD </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Bienvenidos a GOlazo</ThemedText>
        </ThemedText>
        <ThemedText>¿Aburrido de las noticias de fútbol que parecen un testamento? <ThemedText type="defaultSemiBold">Con GOLazo, </ThemedText> 
          tendrás el resumen que de verdad importa: chismes, jugadas épicas y memes para compartir. </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">¡Lucho, Luchito, LUCHAZO!</ThemedText>
        <ThemedText>¡ATENCIÓN! Se busca a la defensa argentina que Luis Díaz <ThemedText type="defaultSemiBold">se llevó en el bolsillo. </ThemedText>  
          El Guajiro hizo un golazo que pasará a la historia, dejando a los <ThemedText type="defaultSemiBold">"che boludos" </ThemedText>preguntándose 
          en qué momento los pasó el camión. El fútbol está en su mejor momento pibe.</ThemedText>
        <ExternalLink href="https://youtu.be/mPx7cRNOWa0?si=DryM78rgUxmTr97U">
                  <ThemedText type="link">¡MiraloOOO!</ThemedText>
        </ExternalLink>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
         ¡No te pierdas ni un solo gol, y que las risas nunca falten!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 215,
    width: 394,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
