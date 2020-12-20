import {combineReducers} from 'redux';

import appReducer from './app/redux';
import casterReducer from './caster/redux';
import playReducer from './play/redux';
import camReducer from './cam/redux';



const reducers = combineReducers({
    app: appReducer,
    caster: casterReducer,
    play: playReducer,
    cam: camReducer,
});

export default reducers;