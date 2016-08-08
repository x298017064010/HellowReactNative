/**
 * Created by x298017064010 on 16/8/8.
 */

import * as types from '../actions/ActionTypes';

export default function Home (state={} , action={}){
    switch (types.type) {
        case types.INDEX_LIST:
            return Object.assign(
                {} , state , action
            )
            break;
        default:
            return state;
    }
}