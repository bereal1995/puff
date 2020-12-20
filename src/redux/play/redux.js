import {createActions, createReducer} from "reduxsauce";
import React from "react";

const initialState = {
    title: '지금까지 볼 수 없었던, 라이브 스트리밍 play',
    description: 'Caster의 특별한 기능들을 사용하여 지금까지 경험하지 못한 특별한 라이브 스트리밍을 만들어보세요',
    downloadCopy: 'PUFFCASTER 다운로드',
    downloadDescription: 'Window 64비트 또는 그 이상 (Ver. 10.13.5)',
}

export const Action = createActions({
    updateState: ['payload'],
}, {
    prefix: 'PLAY/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});