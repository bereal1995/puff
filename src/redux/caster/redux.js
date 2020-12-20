import {createActions, createReducer} from "reduxsauce";
import React from "react";

const initialState = {
    title: '지금까지 볼 수 없었던, 라이브 스트리밍 프로그램',
    description: 'Caster의 특별한 기능들을 사용하여 지금까지 경험하지 못한 특별한 라이브 스트리밍을 만들어보세요',
    downloadIcn: '../../images/icon/downloadIcn.png',
    downloadCopy: 'PUFFCASTER 다운로드',
    downloadDescription: 'Window 64비트 또는 그 이상 (Ver. 10.13.5)',
    visualImg: '../../images/Main/visual.jpg',
    comeTogether: {
        subject: 'COME TOGETHER',
        title: '시청자와 가까워지는 인터랙티브',
        description: '퍼프 플레이는 새로운 방식을 통해 스트리머와 시청자를 즐겁게 합니다. 함께 즐길 수 있는 퍼프 플레이로 스트리머와 시청자를 더 가깝게 만들 수 있습니다.'
    },
    easyPeasy: {
        subject: 'EASY-PEASY',
        title: '쉽게 시청자와 소통할 수 있는 방법',
        description: '시청자와의 소통은 언제나 큰 고민입니다. 간단한 퍼프 플레이 세팅으로 스트리머는 고민을 없애고 팬들과 새로운 방식의 커뮤니케이션을 경험할 수 있습니다.'
    },
    betterExperience: {
        subject: 'BETTER EXPERIENCE',
        title: '새로운 경험을 시청자에게 전달',
        description: '퍼프 플레이는 스트리머와 시청자에게 새로운 경험을 전달합니다. 다양한 형식의 퍼프 플레이를 통해 새로운 경험을 라이브 할 수 있습니다. '
    },
}

export const Action = createActions({
    updateState: ['payload'],
}, {
    prefix: 'CASTER/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {payload}) => ({
        ...state,
        ...payload
    })
});