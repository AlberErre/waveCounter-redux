import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const RestartCount = (props) => (

	    <TouchableOpacity onPress={props.reset}>
	        <Icon name="reply" size={30} color="#000000" />
	        <Text>Reset</Text>
	    </TouchableOpacity>
);

export default RestartCount;

