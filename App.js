import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>

          <TouchableOpacity>
              <Icon name="caret-up" size={100} color="#66ff66" />
          </TouchableOpacity>

          <Text style={styles.textDiplayed}>
            {this.state.count}
          </Text>

          <TouchableOpacity>
              <Icon name="caret-down" size={100} color="#ff6666" />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 200,
    height: 400,
  },
  textDiplayed: {
    fontSize: 30,
  }
});
