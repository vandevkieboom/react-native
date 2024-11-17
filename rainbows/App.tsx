import * as React from 'react';
import { rainbow } from 'rainbow-colors-array-ts';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import Constants from 'expo-constants';

interface RainbowProps {
  containerStyle: StyleProp<ViewStyle>;
  lineStyle: StyleProp<ViewStyle>;
}

interface LetterProps {
  letter: string;
  color: string;
}

const Letter = ({ letter, color }: LetterProps) => {
  return <Text style={{ color: color, textAlign: 'center', fontSize: 24 }}>{letter}</Text>;
};

const Footer = () => {
  const rainbowText = 'Rainbow';
  const colors = rainbow(rainbowText.length, 'hex', false);

  return (
    <View
      style={{
        borderWidth: 7,
        borderColor: 'darkgreen',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {rainbowText.split('').map((letter, index) => (
        <Letter key={letter} letter={letter} color={colors[index].hex} />
      ))}
    </View>
  );
};

const Rainbow = ({ containerStyle, lineStyle }: RainbowProps) => {
  const colors = rainbow(6, 'hex', false);
  return (
    <View style={containerStyle}>
      {colors.map((color) => (
        <View key={color.hex} style={[{ backgroundColor: color.hex }, lineStyle]}></View>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Rainbow containerStyle={{ borderWidth: 7, borderColor: 'blue' }} lineStyle={{ height: 10 }} />

      <View style={{ borderWidth: 7, borderColor: 'red', flex: 1, flexDirection: 'row' }}>
        <Rainbow
          containerStyle={{
            borderWidth: 7,
            borderColor: 'yellow',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
          lineStyle={{ width: 10 }}
        />

        <Rainbow
          containerStyle={{
            borderWidth: 7,
            borderColor: 'purple',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          lineStyle={{ height: 50, width: 50 }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
});
