import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'lucid-ui';

const centerStyle = {
	textAlign: 'center',
	color: '#506A85',
	fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
	fontSize: '44px',
	fontWeight: '300'
};

const App = ({ children }) =>
	<div>
		<h1 style={centerStyle}>My Video!!</h1>
		{ children }
		<footer>
			<Link to="/">
				<Button kind='link'>Videos</Button>
			</Link>
			<Link to="/about">
				<Button kind='link'>About</Button>
			</Link>
		</footer>
	</div>;

App.propTypes = {
	children: PropTypes.object
};

export default App;
