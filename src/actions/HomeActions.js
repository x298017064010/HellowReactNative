/**
 * Created by x298017064010 on 16/8/8.
 */

import * as types from './ActionTypes';

export function getAward(data){
    return {
        type : types.INDEX_LIST,
        data : data
    }
}