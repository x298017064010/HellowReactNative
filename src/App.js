/**
 * Created by x298017064010 on 16/8/8.
 *
 * 配置Redux
 * 1. npm install --save redux & react-redux & redux-thunk
 * 2. import
 * 3.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducers/ReducerObjcs';
import BaseApp from './containers/BaseApp';

// apply thunk
const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithThunk(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BaseApp />
            </Provider>
        )
    }
}