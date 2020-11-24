import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/default.css';
import './styles/fonts.css';
import pict02 from './images/pic02.jpg';
import pict01 from './images/pic01.jpg';

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
				<div id="header">
					<div id="logo">
						<img src={pict02} alt="avatar" />
						<h1><a href="#">Privy</a></h1>
						<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a></span>
					</div>
					<div id="menu">
						<ul>
							<li className="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
							<li><a href="#" accesskey="2" title="">Our Clients</a></li>
							<li><a href="#" accesskey="3" title="">About Us</a></li>
							<li><a href="#" accesskey="4" title="">Careers</a></li>
							<li><a href="#" accesskey="5" title="">Contact Us</a></li>
						</ul>
					</div>
				</div>

				<div id="main">
					<div id="banner">
						<img src={pict01} alt="banner" class="image-full" />
					</div>

					<div id="welcome">
						<div class="title">
							<h2>Fusce ultrices fringilla metus</h2>
							<span class="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue</span>
						</div>
						<p>This is <strong>Privy</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
						<ul class="actions">
							<li><a href="#" class="button">Etiam posuere</a></li>
						</ul>
					</div>

					<div id="featured">
						<div class="title">
							<h2>Maecenas lectus sapien</h2>
							<span class="byline">Integer sit amet aliquet pretium</span>
						</div>
						<ul class="style1">
							<li class="first">
								<p class="date"><a href="#">Jan<b>05</b></a></p>
								<h3>Amet sed volutpat mauris</h3>
								<p><a href="#">Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Etiam non felis. Donec ut ante.</a></p>
							</li>
							<li>
								<p class="date"><a href="#">Jan<b>03</b></a></p>
								<h3>Sagittis diam dolor amet</h3>
								<p><a href="#">Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie. Donec leo, vivamus fermentum nibh in augue praesent congue rutrum.</a></p>
							</li>
							<li>
								<p class="date"><a href="#">Jan<b>01</b></a></p>
								<h3>Amet sed volutpat mauris</h3>
								<p><a href="#">Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Etiam non felis. Donec ut ante.</a></p>
							</li>
							<li>
								<p class="date"><a href="#">Dec<b>31</b></a></p>
								<h3>Sagittis diam dolor amet</h3>
								<p><a href="#">Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie. Donec leo, vivamus fermentum nibh in augue praesent congue rutrum.</a></p>
							</li>
						</ul>
					</div>
					
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