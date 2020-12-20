import {createActions, createReducer} from "reduxsauce";
import React from "react";

const initialState = {

}

export const Action = createActions({
    updateState: ['payload'],
}, {
    prefix: 'CAM/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});