import React, {PropTypes} from 'react';
import { Button } from 'lucid-ui';

import style from './style';

export default class RotateCard extends React.Component {
	constructor() {
		super();
	    this.state = {
	    	hovered: false
	    };
	}

	onFlip () {
		this.setState({
			hovered: !this.state.hovered
		});
	}

	render () {
		const containerClassName = 'card-container manual-flip' + (this.state.hovered ? ' hover' : '');

		return (
			<div className={containerClassName} style={style.rotateCard}>
                <div className='card'>
                    <div className='front'>
                    	<div className='content'>
                            {this.props.front}
                        </div>
                        <div className='footer' style={style.footer}>
                            <Button kind='primary' onClick={this.onFlip.bind(this)}>More Detail</Button>
                        </div>
                    </div>
                    <div className='back'>
                        <div className='header'>
                            <h5 className='motto'>More info!</h5>
                        </div>
                        <div className='content'>
                            {this.props.back}
                        </div>
                        <div className='footer' style={style.footer}>
                            <Button kind='primary' onClick={this.onFlip.bind(this)}>Back</Button>
                        </div>
                    </div> 
                </div> 
            </div>
		);
	}
}

RotateCard.propTypes = {
	front: PropTypes.element,
	back: PropTypes.element
};