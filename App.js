import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API_URL, ENVIRONMENT} from './EnvConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ENVIRONMENT:{ENVIRONMENT}</Text>
      <Text style={styles.text}>API_URL:{API_URL}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bcd4',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontSize: 18,
  },
});
