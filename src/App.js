/**
 * Created by x298017064010 on 16/8/8.
 *
 * 配置Redux
 * 1. npm install --save redux & react-redux & redux-thunk
 * 2. import
 * 3. 创建store
 */

import React, {Component} from 'react';
import { Platform, BackAndroid } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Actions} from 'react-native-router-flux'

import * as reducers from './reducers/index.reducers';
import BaseApp from './containers/BaseApp'

// 创建store
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
export const store = createStoreWithThunk(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BaseApp/>
            </Provider>
        )
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }

    }
    _onBackAndroid = () => {

        Actions.pop();
        // const nav = this.navigator;
        // const routers = nav.getCurrentRoutes();
        // if (routers.length > 1) {
        //     nav.pop();
        //     return true;
        // }
        // return false;
    };
}



