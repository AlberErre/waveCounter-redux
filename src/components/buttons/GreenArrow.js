import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import buttonStyle from './style/buttonStyle';

const GreenArrow = (props) => (

    <TouchableOpacity onPress={props.add}>
        <Icon
          name="caret-up"
          size={buttonStyle.green.size}
          color={buttonStyle.green.color}
        />
    </TouchableOpacity>

);

export default GreenArrow;

