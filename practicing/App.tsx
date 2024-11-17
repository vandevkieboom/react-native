import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jordy');
  const [people, setPeople] = useState([
    { name: 'Jordy', id: '1' },
    { name: 'Karine', id: '2' },
    { name: 'Lars', id: '3' },
    { name: 'Steff', id: '4' },
    { name: 'Denzel', id: '5' },
    { name: 'Thomas', id: '6' },
    { name: 'Jarne', id: '7' },
    { name: 'Similon', id: '8' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.centerText}>Header</Text>
      </View>

      <View style={styles.main}>
        <View style={{ backgroundColor: 'lightblue', flex: 1, justifyContent: 'center' }}>
          <Text style={styles.centerText}>{name}</Text>
          <TextInput
            placeholder="Enter your name"
            onSubmitEditing={(event) => setName(event.nativeEvent.text)}
            style={styles.textInput}
          />
        </View>
        <View style={{ backgroundColor: 'coral', flex: 1, justifyContent: 'center' }}>
          <Text style={styles.centerText}>Main 2</Text>
          {/* <ScrollView>
            {people.map((person) => (
              <View key={person.id}>
                <Text style={styles.people}>{person.name}</Text>
              </View>
            ))}
          </ScrollView> */}
          <FlatList
            keyExtractor={(item) => item.id}
            data={people}
            renderItem={({ item }) => <Text style={styles.people}>{item.name}</Text>}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.centerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'red',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
  },
  footer: {
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 4,
    marginTop: 10,
    borderRadius: 20,
  },
  people: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
  },
});
