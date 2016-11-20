import React, { PropTypes } from 'react';

export default class VideoCard extends React.Component {
	render() {
		return <div>
			<div><label>url: </label>{this.props.url}</div>
			<div><label>title: </label>{this.props.title}</div>
			<hr/>
		</div>;
	}
}

VideoCard.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string
};
