import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import VideoList from './containers/VideoList/VideoList';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={VideoList} />
		<Route path="/about" component={About} />
	</Route>
);
