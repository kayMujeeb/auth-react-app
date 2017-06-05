import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBes5iGYy0j3Y53rZfNIq_L1JEasAaScew',
      authDomain: 'auth-2f593.firebaseapp.com',
      databaseURL: 'https://auth-2f593.firebaseio.com',
      projectId: 'auth-2f593',
      storageBucket: 'auth-2f593.appspot.com',
      messagingSenderId: '371389916535'
    });
  }

  render() {
    return (
      <View>
        <Header headText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
