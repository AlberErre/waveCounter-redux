import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyle from './style/buttonStyle';

const RestartCount = (props) => (

    <TouchableOpacity onPress={props.reset}>
        <Icon 
          name="reply"
          size={buttonStyle.reset.size}
          color={buttonStyle.reset.color}
        />
        <Text>Reset</Text>
    </TouchableOpacity>
);

export default RestartCount;

