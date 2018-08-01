import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TextCount = (props) => (

    <Text style={styles.textDisplayed}>
      {props.counter}
    </Text>
    
);

export default TextCount;

const styles = StyleSheet.create({
  textDisplayed: {
    fontSize: 30,
  }
});
