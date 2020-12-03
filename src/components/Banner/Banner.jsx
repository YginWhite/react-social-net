import React from 'react';
import { Route } from 'react-router-dom';
import pict01 from './../../images/pic01.jpg';
import pict03 from './../../images/pic03.jpg';
import pict04 from './../../images/pic04.png';
import pict05 from './../../images/pic05.jpg';
import pict06 from './../../images/pic06.png';

const Pict = ({ src }) => {
	return (
		<img src={src} alt="banner" className="image-full" />
	);
};

const withSrcPict = (src) => {
	return (props) => <Pict src={src} />
};

const Banner = (props) => {
	return (
		<div id="banner">
			<Route path='/profile/:userId?' component={withSrcPict(pict06)} />
			<Route path='/users' component={withSrcPict(pict04)} />
			<Route path='/dialogs' component={withSrcPict(pict03)} />
			<Route path='/news' component={withSrcPict(pict01)} />
			<Route path='/music' component={withSrcPict(pict01)} />
			<Route path='/settings' component={withSrcPict(pict01)} />
			<Route path='/login' component={withSrcPict(pict05)} />
		</div>
	);
};

export default Banner;