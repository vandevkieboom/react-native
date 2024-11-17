import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

interface Posters {
  name: string;
  url: string;
  year: number;
}

const Posters: Posters[] = [
  {
    name: 'The Shawshank Redemption',
    url: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    year: 1994,
  },
  {
    name: 'The Godfather',
    url: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
    year: 1972,
  },
  {
    name: 'The Dark Knight',
    url: 'https://m.media-amazon.com/images/S/pv-target-images/826e20d747af639e2e2c3a95662283eabc6a6216a9bb74fc45cb1c29f2708b96.jpg',
    year: 2008,
  },
  {
    name: "Schindler's List",
    url: 'https://m.media-amazon.com/images/I/51hYGuLgXxL._AC_UF1000,1000_QL80_.jpg',
    year: 1993,
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    url: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg',
    year: 2003,
  },
  {
    name: 'Pulp Fiction',
    url: 'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    year: 1994,
  },
];

export default function App() {
  const randomIndexes = () => {
    const indexes = new Set<number>();
    while (indexes.size < 6) {
      indexes.add(Math.floor(Math.random() * Posters.length));
    }
    return Array.from(indexes);
  };

  const randomPosterIndexes = randomIndexes();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[0]].name}\nYear: ${Posters[randomPosterIndexes[0]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[0]].url }} style={styles.image} />
      </Pressable>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[1]].name}\nYear: ${Posters[randomPosterIndexes[1]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[1]].url }} style={styles.image} />
      </Pressable>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[2]].name}\nYear: ${Posters[randomPosterIndexes[2]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[2]].url }} style={styles.image} />
      </Pressable>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[3]].name}\nYear: ${Posters[randomPosterIndexes[3]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[3]].url }} style={styles.image} />
      </Pressable>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[4]].name}\nYear: ${Posters[randomPosterIndexes[4]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[4]].url }} style={styles.image} />
      </Pressable>
      <Pressable
        onPress={() => alert(`${Posters[randomPosterIndexes[5]].name}\nYear: ${Posters[randomPosterIndexes[5]].year}`)}
      >
        <Image source={{ uri: Posters[randomPosterIndexes[5]].url }} style={styles.image} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});
