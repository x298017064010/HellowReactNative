/**
 * Created by x298017064010 on 16/8/10.
 */




import React, { Component } from 'react';
import { PropTypes, View, Text } from 'react-native';

// const propTypes = {
//     selected: PropTypes.bool,
//     title: PropTypes.string,
// };
// TabIcon.propTypes = propTypes;

export default class TabIcon extends Component {

    render() {
        return (
            <Text
                style={{ color: this.props.selected ? 'red' : 'black' }}
            >
                {this.props.title}
            </Text>
        )
    }
}
