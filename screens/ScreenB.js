import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class ScreenB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen B</Text>
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'black', margin: 10}} onPress={() => {this.props.navigation.push("StackScreenC")}}>
          <Text>Go To Screen C</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
