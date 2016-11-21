import React, { PropTypes } from 'react';
import Vimeo from 'react-vimeo';

export default class VideoCard extends React.Component {
	render() {
		return <div>
			<div><label>url: </label>{this.props.url}</div>
			<div><label>title: </label>{this.props.title}</div>
			<div style='width: 600px; height:200px'><Vimeo videoId={this.props.id+''} /></div>
			<hr/>
		</div>;
	}
}

VideoCard.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	id: PropTypes.number
};
