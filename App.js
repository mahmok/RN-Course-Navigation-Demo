import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class MainPage extends React.Component 
{
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Main Page</Text>
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'black', margin: 10}} onPress={() => {this.props.navigation.navigate("Tabbed")}}>
          <Text>Tabbed Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'black', margin: 10}} onPress={() => {this.props.navigation.navigate("Drawer")}}>
          <Text>Drawer Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, borderColor: 'black', margin: 10}} onPress={() => {this.props.navigation.navigate("Stack")}}>
          <Text>Stacked Navigation</Text>
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
