/**
 * Created by x298017064010 on 16/8/8.
 *
 * 1.创建RouterWithRedux,一定要设置属性传递{...this.props}
 * 2.注册应用的scenes结构
 * 3.conect -> states 和 actions
 * 4.每个注册过的scenes都要进行 connect(states)(Component)
 */

import React, {Component} from 'react';


export default class BaseApp extends Component {

    render() {
        // console.log(this.props)
        return (
            <RouterWithRedux scenes={scenes} {...this.props} />
        )
    }
}


// 注册scenes
import {Router, Scene, Actions} from 'react-native-router-flux';
import Home from '../pages/Home'
import Home2 from '../pages/Home2'
import Home3 from '../pages/Home3'
import TabIcon from './TabIcon'
import Drawer from './NavigationDrawer'

const scenes = Actions.create(
    <Scene key="root">
        {/*<Scene key="home" component={Home} title="Login" />*/}
        {/*<Scene key="home2" component={Home2} title="Register" />*/}
        {/*<Scene key="home3" component={Home3} />*/}
        <Scene key="drawer" component={Drawer}>
            <Scene key="tabbar" tabs={true}>
                <Scene key="tab1" initial title="Tab #1" icon={TabIcon}>
                    <Scene
                        key="tab1_1"
                        component={Home}
                        title="Tab #1_1"
                        onRight={() => alert('Right button')}
                        rightTitle="Right"
                    />
                    <Scene
                        key="tab1_2"
                        component={Home2}
                        title="Tab #1_2"
                        titleStyle={{color: 'black'}}
                    />
                </Scene>
                <Scene key="tab2" title="Tab #2" icon={TabIcon}>
                    <Scene
                        key="tab2_1"
                        component={Home2}
                        title="Tab #2_1"
                    />
                    <Scene
                        key="tab2_2"
                        component={Home3}
                        title="Tab #2_2"
                        hideBackImage
                        onBack={() => alert('Left button!')}
                        backTitle="Left"
                    />
                </Scene>
                <Scene key="tab3" component={Home3} title="Tab #3" hideTabBar icon={TabIcon}/>
            </Scene>
        </Scene>
    </Scene>
);


// 绑定 states 和 actions
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index.actions';

const mapStateToProps = (state) => ({
    states: state
});
const mapActionCreators = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapActionCreators)(BaseApp);
const RouterWithRedux = connect()(Router);
