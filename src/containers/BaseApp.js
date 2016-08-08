/**
 * Created by x298017064010 on 16/8/8.
 */

import React, { Component } from 'react';
import {Navigator} from 'react-native';

import Home from '../pages/Home'

export default class BaseApp extends Component {

    render() {
        return (
            <Home/>
        )
    }
}

//====================================================
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../actions/HomeActions';

function _pushState() {
  return (
      (state) => ( {home: state.home} )
  )
}
function _pushDispatch() {
  return (
      (dispatch) => ( {home: bindActionCreators(homeActions , dispatch)} )
  )
}
export default connect ( _pushState, _pushDispatch )(BaseApp)