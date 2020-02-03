import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="appContainer">
				<div className="appContainer-header">
					<Header />
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
				</div>
				<div className="appContainer-aside">
					<Navbar />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;