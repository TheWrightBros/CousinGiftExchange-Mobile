/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Start from './CousinGiftExchange/Start'
import Welcome from './CousinGiftExchange/Welcome'

var CousinGiftExchange = React.createClass({  
  getInitialState: function() {
    return {
      loginView: false,
      createAccountView: false
    }
  },

  toggleLoginView: function() {
    console.log("switch login");
    this.setState({loginView: !this.state.loginView});
  },

  toggleCreateAccountView: function() {
    console.log("switch account");
    this.setState({createAccountView: !this.state.createAccountView});
  },

  render: function() {
    if (this.state.loginView) {
      return (
        <View style={styles.container} >
          <Text>
            Login to the account here.
          </Text>
          <TouchableHighlight 
            style={styles.button}
            onPress={this.toggleLoginView} >
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </TouchableHighlight>
        </View>
      )
    }
    if (this.state.createAccountView) {
      return (
        <View style={styles.container} >
          <Text>
            Create Account Here
          </Text>
          <TouchableHighlight 
            style={styles.button}
            onPress={this.toggleCreateAccountView} >
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </TouchableHighlight>
        </View>
      )
    }
    return (
      <Welcome toggleLoginView={this.toggleLoginView} toggleCreateAccountView={this.toggleCreateAccountView} />
    );
  }
});

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

AppRegistry.registerComponent('CousinGiftExchange', () => CousinGiftExchange);
