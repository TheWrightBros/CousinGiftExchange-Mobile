'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Start extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          Welcome to Cousin Gift Exchange!
        </Text>
        <TouchableHighlight 
          onPress={this.props.toggleCreateAccountView}
          style={styles.button} >
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={this.props.toggleLoginView}
          style={styles.button} >
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
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

module.exports = Start;