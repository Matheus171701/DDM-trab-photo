import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {A} from"@expo/html-elements";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/social-midias.png')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://wa.me/qr/5D2XL6JUTF74P1')}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Whatsapp</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-henrique-688316312/')}>
          <Image source={require('@/assets/images/7.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Linkedin</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('mailto:mathrique17010@gmail.com')}>
          <Image source={require('@/assets/images/8.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Email</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://github.com/Matheus171701')}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Github</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://br.pinterest.com/mathrique17010/')}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Pinterest</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('tel:5518981610390')}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Telefone</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://www.instagram.com/eletronicsvolts/')}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Instagram</ThemedText>
        </Pressable>

        <Pressable style={styles.redes} onPress={() => Linking.openURL('https://x.com/MHenrique81152')}>
          <Image source={require('@/assets/images/6.png')} style={styles.icon} />
          <ThemedText style={styles.text}>Twitter/X</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    borderBlockColor: 'white',
    width: 250, 
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: "black"
    
  },
});
