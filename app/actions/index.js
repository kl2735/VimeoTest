
import * as types from './types';
import {VIDEO, video} from './video';

export function filterTable(filter) {
	return {
        type: types.FILTER,
        filter
    };
}

export const CONSTS = {
	VIDEO
};

export default {
	video
};