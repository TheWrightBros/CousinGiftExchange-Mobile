'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


class Welcome extends Component {
  render() {
    return (
      <View>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>Add</Text>
        <Text style={styles.toolbarTitle}>Welcome!</Text>
        <Text style={styles.toolbarButton}>Like</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Create a gift exchange +
        </Text>
      </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({

  // toolbar
  toolbar:{
    backgroundColor:'#070657',
    marginTop:20,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarButton:{
    width: 50,
    paddingTop:10,
    color:'#fff',
    textAlign:'center'
  },
  toolbarTitle:{
    color:'#fff',
    paddingTop:10,
    textAlign:'center',
    fontWeight:'bold',
    flex:1
  },

  container: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4'
  },
  welcome: {
    marginTop:-20,
    paddingBottom:20,
    color:'#070657',
    fontSize: 20,
  },
});

module.exports = Welcome;