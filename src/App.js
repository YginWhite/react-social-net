import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/default.css';
import './styles/fonts.css';
import pict01 from './images/pic01.jpg';
import pict03 from './images/pic03.jpg';

import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner'


const App = (props) => {
	return (
		<BrowserRouter>
			<div id="page" className="container">
				<HeaderContainer />

				<div id="main">
					<Banner />

					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/login' component={Login} />

					
					<div id="copyright">
						<span>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a></span>
						<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;