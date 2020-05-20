import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function PaginaHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them
        into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <Button
        title="Detalhe"
        onPress={() =>
          navigation.navigate('Detalhe', {
            nome: 'Jackson',
            telefone: '84 98800-0055',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
});
