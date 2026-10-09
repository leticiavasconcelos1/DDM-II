import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.titulo}> Minha Biblioteca </Text>
      <Text style={styles.subtitulo}> Minhas leituras atuais </Text>

      <TextInput style={styles.input} placeholder="Pesquisar livro ou autor..." />

      <Text style={styles.secao}>Livros disponíveis</Text>

      <ScrollView style={styles.scr}>
        <View style={styles.livro}>
          <Text style={styles.nomeLivro}>O Pequeno Príncipe</Text>
          <Text style={styles.autor}>Antoine de Saint-Exupéry</Text>
          <Text style={styles.descricao}> Uma história sobre amizade, amor e descobertas. </Text>
        </View>

        <View style={styles.livro}>
          <Text style={styles.nomeLivro}> Dom Casmurro</Text>
          <Text style={styles.autor}>Machado de Assis</Text>
          <Text style={styles.descricao}>Um clássico da literatura brasileira.</Text>
        </View>

        <View style={styles.livro}>
          <Text style={styles.nomeLivro}>O Hobbit</Text>
          <Text style={styles.autor}>J. R. R. Tolkien</Text>
          <Text style={styles.descricao}> Uma aventura fantástica pela Terra-média.</Text>
        </View>

        <View style={styles.livro}>
          <Text style={styles.nomeLivro}> A Culpa é das Estrelas</Text>
          <Text style={styles.autor}>John Green</Text>
          <Text style={styles.descricao}> Uma história emocionante sobre amor e superação.</Text>
        </View>
      </ScrollView>

      <View style={styles.rodape}>
        <Button
          title="Explorar livros"
          color="#5a189a"
          onPress={() => alert('Boas leituras!')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1e8',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#10002b',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#240046',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#7b2cbf',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  secao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#240046',
    marginBottom: 12,
  },

  scr: {
    flex: 1,
  },

  livro: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3c096c',
  },

  nomeLivro: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3c096c',
  },

  autor: {
    fontSize: 14,
    color: '#240046',
    marginTop: 5,
  },

  descricao: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },

  rodape: {
    paddingTop: 12,
    paddingBottom: 10,
  },
});