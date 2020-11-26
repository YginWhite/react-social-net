import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/default.css';
import './styles/fonts.css';
import pict01 from './images/pic01.jpg';

import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// import './App.css';
// import HeaderContainer from './components/Header/HeaderContainer';
// import Navbar from './components/Navbar/Navbar';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Settings from './components/Settings/Settings';
// import UsersContainer from './components/Users/UsersContainer';
// import Login from './components/Login/Login';

const App = (props) => {
	return (
		<BrowserRouter>
			<div id="page" className="container">
				<HeaderContainer />

				<div id="main">
					<div id="banner">
						<img src={pict01} alt="banner" class="image-full" />
					</div>


					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />

					
					<div id="copyright">
						<span>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a></span>
						<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
					</div>
				</div>
			</div>
			{/*

				<div className="appContainer">
					<div className="appContainer-header">
						<HeaderContainer />
					</div>
					<div className="appContainer-main">
						<Route path='/dialogs'
							   render={() => <DialogsContainer />} />

						<Route path='/profile/:userId?'
							   render={() => <ProfileContainer />} />

						<Route path='/news' component={News} />
						<Route path='/music' component={Music} />
						<Route path='/settings' component={Settings} />

						<Route path='/users' render={() => <UsersContainer />} />

						<Route path='/login' component={Login} />
					</div>
					<div className="appContainer-aside">
						<Navbar />
					</div>
				</div>


			*/}
			
		</BrowserRouter>
	);
}

export default App;