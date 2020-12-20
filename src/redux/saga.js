import {all} from 'redux-saga/effects'
import appSaga from './app/saga';
import mainSaga from './main/saga';

function* sagas() {
    yield all([
        appSaga(),
        mainSaga(),
    ])
}

export default sagas;