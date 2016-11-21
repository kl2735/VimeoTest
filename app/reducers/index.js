import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import {video} from './video';


const rootReducer = combineReducers({
	video,
	routing
});

export default rootReducer;
