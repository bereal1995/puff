import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as CasterAction} from './caster/redux'
import {Action as PlayAction} from './play/redux'
import {Action as CamAction} from './cam/redux'


const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const casterActions = bindActionCreators(CasterAction.Creators, dispatch);
export const playActions = bindActionCreators(PlayAction.Creators, dispatch);
export const camActions = bindActionCreators(CamAction.Creators, dispatch);