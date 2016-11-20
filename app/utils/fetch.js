//wrap it so we can test it
import fetch from 'isomorphic-fetch';

export default (url, options) => fetch(url, options);