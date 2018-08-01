import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const RestartCount = (props) => {

	return (
	    <TouchableOpacity onPress={() => props.reset}>
	        <Icon name="redo" size={100} color="#900" />
	    </TouchableOpacity>
    );
};

export default RestartCount;

