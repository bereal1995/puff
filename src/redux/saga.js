import {all} from 'redux-saga/effects'
import appSaga from './app/saga';
import casterSaga from './caster/saga';
import playSaga from './play/saga';
import camSaga from './cam/saga';

function* sagas() {
    yield all([
        appSaga(),
        casterSaga(),
        playSaga(),
        camSaga(),
    ])
}

export default sagas;