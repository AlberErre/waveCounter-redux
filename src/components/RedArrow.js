import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const RedArrow = (props) => (

    <TouchableOpacity onPress={props.sub}>
        <Icon name="caret-down" size={100} color="#ff6666" />
    </TouchableOpacity>
    
);

export default RedArrow;

