import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextCount = (props) => (

    <Text style={styles.textDisplayed}>
      {props.counter}
    </Text>
);

export default TextCount;

const styles = StyleSheet.create({
    textDisplayed: {
      fontSize: 120,
    }
});
