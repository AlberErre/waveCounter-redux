import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import buttonStyle from './style/buttonStyle';

const RedArrow = (props) => (

    <TouchableOpacity onPress={props.sub}>
        <Icon
          name="caret-down"
          size={buttonStyle.red.size}
          color={buttonStyle.red.color}
        />
    </TouchableOpacity>
    
);

export default RedArrow;

