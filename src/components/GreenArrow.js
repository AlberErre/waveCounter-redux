import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const GreenArrow = (props) => (

    <TouchableOpacity onPress={props.add}>
        <Icon name="caret-up" size={100} color="#66ff66" />
    </TouchableOpacity>

);

export default GreenArrow;

