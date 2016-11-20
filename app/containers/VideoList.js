import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';

import actions from '../actions';

export class VideoList extends React.Component {
	componentDidMount() {
		this.props.loadVideos();
	}

	renderVideos(videos) {
		return videos.map(video => (
				<VideoCard 
					key={video.id}
					url={video.url}
					title={video.title}
				/>
			));
	}

	render() {
		return (<div>
			{
				this.props.video.loading ?
					<div>Loading</div> :
					<div>
						{this.renderVideos(this.props.video.videos)}
					</div>
			}
		</div>);
	}
}

VideoList.propTypes = {
	video: PropTypes.object,
	videos: PropTypes.arrayOf(PropTypes.object),
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
