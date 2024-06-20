import { Image, StyleSheet, Platform, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-paralax.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.tituloContainer} >
        <ThemedText type="title">Bem vindo ao Ghost!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>O app Ghost é um projeto com o objetivo de detectar ameaças ao seu despositivo, descobrir vírus, emails nocivo, spam, bloquear ligações desconhecidas caso desejado pelo dono do dispositivo, e muito mais serviços que presam pela segurnaça do aparelho.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>

      <ThemedView>
        <Image style={styles.foto} source={require('@/assets/images/foto.png')} />
      </ThemedView>

      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          Sou Matheus Henrique, aluno da ETEC Miltton Gazzetti de Presidente Venceslau.
          Professor: Graziani Zanfolin.
          Meu número de telefone é: 18 98161-0390
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Próxima página:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          Depois de ter lido esta página, vá para a página das redes sociais, onde todas as que eu estou presente estarão lá.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

  },

  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    height: 300,
    width: 420,
    bottom: -40,
    left: -30,
    position: 'absolute',
  },
  title: {
    color: '#5bc1b9'
  },
  foto: {
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center'
  }
});
