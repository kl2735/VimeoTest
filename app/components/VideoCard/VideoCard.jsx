import React, { PropTypes } from 'react';
import reactStringReplace from 'react-string-replace';

import style from './style';
import RotateCard from '../RotateCard/RotateCard';

const URL_REGEX = /(https?:\/\/\S+|www.\S+)/gi;

export default class VideoCard extends React.Component {
	renderDescription() {
		return this.props.description.split(/<br \/> ?\r\n ?<br \/>/).map((item, k) => {
			return <p key={k}>
				{item.split(/<br \/> ?/).map((subItem, i) => {
					return <span key={i}>
						{
							// parse url, wrap the url part with <a> tag
							reactStringReplace(subItem, URL_REGEX, (matched, j) => (
								<a key={j} 
									href={matched.startsWith('www.')?`\\\\${matched}`:matched} 
									target='blank'>{matched}
								</a>
							))
						}
						<br />
					</span>;
				})}
			</p>;
		});
	}

	render() {
		const front = <div style={style.videoContent}>
			<iframe width='100%' height='100%' frameBorder="0" src={this.props.videoUrl}></iframe>
			<span style={style.frontTitle}>Title: </span>
			<span style={style.frontTitleContent}>{this.props.title}</span>
		</div>;

		const back = <div style={style.backWrapper}>
			<img style={style.portrait} src={this.props.portrait} />
			<div><span>Title: {this.props.title}</span></div>
			<div style={style.metaItem}>
				<span>Author: </span>
				<a href={this.props.authorUrl} target='blank'>{this.props.author}</a>
			</div>
			<div style={style.metaItem}><span>Date: {this.props.date}</span></div>
			<div style={style.metaItem}><span>Tags: {this.props.tags}</span></div>
			<div style={style.metaItem}><span>Likes: {this.props.numOfLikes}</span></div>
			<div style={style.metaItem}><span>Plays: {this.props.numOfPlays}</span></div>
			<div style={style.metaItem}><span>Comments: {this.props.numOfComments}</span></div>
			<div style={style.metaItem}>
				<span>Description: </span>
				<div style={style.description}>
					{this.renderDescription()}
				</div>
			</div>
		</div>;

		return <div style={style.videoWrapper}>
			<RotateCard 
				front={front}
				back={back}
			/>
		</div>;
	}
}

VideoCard.propTypes = {
	videoUrl: PropTypes.string,
	title: PropTypes.string,
	authorUrl: PropTypes.string,
	author: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	tags: PropTypes.string,
	portrait: PropTypes.string,
	numOfLikes: PropTypes.number,
	numOfComments: PropTypes.number,
	numOfPlays: PropTypes.number,
	id: PropTypes.number
};
