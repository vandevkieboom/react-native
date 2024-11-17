import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, Pressable } from 'react-native';

const App = () => {
  const random0to10 = () => {
    return Math.floor(Math.random() * 10);
  };

  return (
    <View style={styles.container}>
      <Text>Het getal is {random0to10()}</Text>
      <Text style={styles.boldText}>Het getal is {random0to10()}</Text>
      <View>
        <Text style={styles.sub_container}>SubView</Text>
      </View>
      <Pressable onLongPress={() => alert(`PIKACHU!`)} delayLongPress={3000}>
        <Image source={require('./assets/pikachu.jpg')} style={styles.image} />
      </Pressable>
      <Image
        source={{ uri: 'https://static.posters.cz/image/1300/posters/pulp-fiction-cover-i1288.jpg' }}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Enter Password"
        onSubmitEditing={(event) => {
          alert(`Entered Password: ${event.nativeEvent.text}`);
        }}
      />
      <Button
        title="random"
        color="red"
        disabled={false}
        onPress={(event) => alert(`The number is ${random0to10()}`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  sub_container: {
    width: 100,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;
