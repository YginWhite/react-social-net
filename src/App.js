import React from 'react';
import { Route } from 'react-router-dom';
import './styles/default.css';
import './styles/fonts.css';

import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.isInitialized) {
			return <div className="container"><Preloader /></div>;
		}

		return (
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
		);
	}
}

const mapStateToProps = (state) => ({
	isInitialized: state.app.isInitialized
});

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)

