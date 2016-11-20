import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
	<div>
		<h1>My Video!!</h1>
		{ children }
		<footer>
			<Link to="/">Video</Link>
			<Link to="/about">About</Link>
		</footer>
	</div>;

App.propTypes = {
	children: PropTypes.object
};

export default App;
