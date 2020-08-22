import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Avantha Medis
      </Text>
    <Image source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            style={{width: 200, height: 200, alignSelf: "center"}}/>
    <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque at neque pellentesque dapibus ac eu felis.
      </Text>

    <Button
  onPress={() => {
    alert('Avantha Medis');
  }}
  title="Press Here"
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
  },
});
