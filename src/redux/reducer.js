import {combineReducers} from 'redux';

import appReducer from './app/redux';
import mainReducer from './main/redux';



const reducers = combineReducers({
    app: appReducer,
    main: mainReducer,
});

export default reducers;