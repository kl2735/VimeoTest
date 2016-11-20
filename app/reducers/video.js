import { CONSTS } from '../actions';

const { VIDEO } = CONSTS;

const defaultState = {
	videos: [],
	loading: false
};

export const video = (state = defaultState, action) => {
	switch (action.type) {
		case VIDEO.LOADING: 
			return {
				...state,
				loading: true
			};
		case VIDEO.LOADED:
			return {
				...state,
				loading: false,
				videos: action.payload
			};
		default:
			return state;
	}
};


