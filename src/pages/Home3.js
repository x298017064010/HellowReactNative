/**
 * Created by x298017064010 on 16/8/8.
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Home3 extends Component {

    // 构造
      constructor(props) {
        super(props);
          console.log(this.props.states);

          // 初始状态
        this.state = {};
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this._onPress}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.welcome} onPress={this._onPress2}>
                    Welcome to React Native!
                </Text>
            </View>
        )
    }

    _onPress = () => {
        const {states, actions} = this.props;
        // console.log(actions);
        this.props.actions.appendTodo();
        console.log(states.HomeReducer);
        // this.props.actions.home3();

    }
    _onPress2 = () => {
        const {states, actions} = this.props;
        // console.log(actions);
        // console.log(states.HomeReducer);
        Actions.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 注册actions
import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
    states: state
});
export default connect(mapStateToProps)(Home3);