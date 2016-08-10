/**
 * Created by x298017064010 on 16/8/8.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Home2 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this._onPress}>
                    Welcome to React Native!
                </Text>
            </View>
        )
    }

    _onPress = () => {
        console.log(this.props);

        Actions.tab2_2();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});