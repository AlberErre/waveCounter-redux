import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Counter from './src/Counter';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
