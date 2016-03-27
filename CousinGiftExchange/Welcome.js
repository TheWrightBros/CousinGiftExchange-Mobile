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
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Nice job signing in!
        </Text>
        <Text style={styles.welcome}>
          Dashboard goes here.
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    marginTop: -100,
    fontSize: 20
  },
  button: {
    marginTop: 30,
    backgroundColor: "#48BBEC",
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'center'
  }
});

module.exports = Welcome;