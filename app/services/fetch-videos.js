import fetch from '../utils/fetch';
const Promise = require('es6-promise').Promise;

const RESOURCE_URL = 'http://vimeo.com/api/v2/channel/staffpicks/videos.json';

const processStatus = (response) => {
    // status "0" to handle local files fetching (e.g. Cordova/Phonegap etc.)
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response.json());
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

const getVideos = () => {
	return fetch(RESOURCE_URL)
		.then(processStatus);
};

export default () => getVideos();