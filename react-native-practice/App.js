import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from './components/Image';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Ailsa! How are you?</Text>
        <Image />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
