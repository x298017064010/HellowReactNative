/**
 * Created by x298017064010 on 16/8/8.
 */

import { ActionConst } from 'react-native-router-flux';

const initialState = {
    scene: '',
};

export default function RouterReducer (state = initialState, action = {}) {
    switch (action.type) {
        // focus action is dispatched when a new screen comes into focus
        case ActionConst.FOCUS:
            console.log('focus');

            return {
                ...state,
                scene: action.scene,
            };
            break;
        // ...other actions


        default:
            return state;
    }
}