import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as MainAction} from './main/redux'


const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const mainActions = bindActionCreators(MainAction.Creators, dispatch);