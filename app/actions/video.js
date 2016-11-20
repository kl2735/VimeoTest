import getVideos from '../services/fetch-videos';

export const VIDEO = {
	LOADING: 'VIDEO_LOADING',
	LOADED: 'VIDEO_LOADED'
};

export const video = {
	videosLoading: () => ({
		type: VIDEO.LOADING
	}),
	videosLoaded: (videos) => ({
		type: VIDEO.LOADED,
		payload: videos
	}),

	//async actions
	loadVideos: () => (dispatch) => {
		dispatch(video.videosLoading());

		// use fetch
		getVideos().then((response) => {
			dispatch(video.videosLoaded(response));
		});
		
	}
};