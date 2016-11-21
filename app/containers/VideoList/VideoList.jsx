import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { LoadingIndicator } from 'lucid-ui';

import VideoCard from '../../components/VideoCard/VideoCard';
import style from './style';

import actions from '../../actions';

const SRC_PATH = '//player.vimeo.com/video/';

export class VideoList extends React.Component {
	componentDidMount() {
		this.props.loadVideos();
	}

	renderVideos(videos) {

		return videos.map(video => (
				<VideoCard 
					key={video.id}
					id={video.id}
					videoUrl={SRC_PATH + video.id + '?autoplay=0'}
					title={video.title}
					date={video.upload_date}
					author={video.user_name}
					authorUrl={video.user_url}
					tags={video.tags}
					description={video.description}
					portrait={video.user_portrait_large}
					numOfLikes={video.stats_number_of_likes}
					numOfPlays={video.stats_number_of_plays}
					numOfComments={video.stats_number_of_comments}
				/>
			));
	}

	render() {
		return <LoadingIndicator isLoading={this.props.video.loading} overlayKind='dark'>
				<div style={style.videoContent}>
					{this.renderVideos(this.props.video.videos)}
				</div>
			</LoadingIndicator>;
	}
}

VideoList.propTypes = {
	video: PropTypes.object,
	loadVideos: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadVideos: () => dispatch(actions.video.loadVideos())
    };
};

export default connect(
    (state) => ({ video: state.video }),
    mapDispatchToProps
)(VideoList);
