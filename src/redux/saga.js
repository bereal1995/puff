import {all} from 'redux-saga/effects'
import appSaga from './app/saga';

function* sagas() {
    yield all([
        appSaga(),
    ])
}

export default sagas;