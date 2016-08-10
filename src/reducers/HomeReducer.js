/**
 * Created by x298017064010 on 16/8/8.
 */

import * as ActionType  from '../actions/ActionType';

export default function HomeReducer(state = {}, action = {}) {

    switch (action.type) {
        case ActionType.LOAD_TODOS:
            return {
                ...state,
                data: '12312eiuqwheiq',
            };
            // Object.assign({}, state, {data: '12312eiuqwheiq'})
            break;
        default:
            return state;
    }
}