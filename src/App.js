import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<div className="appContainer">
			<div className="appContainer-header">
				<Header />
			</div>
			<div className="appContainer-main">
				{/*<div className="test">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus, magnam assumenda eius autem repellat, odit adipisci aliquam blanditiis, perspiciatis earum deserunt quam sapiente quis officia facilis veniam magni minus!
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla voluptas, ut ipsa, ab sit quasi sapiente minus! Vitae vero doloribus, facere. Corporis asperiores dolorem eos veritatis quas. Consequatur ea, modi?
					
				</div>*/}
			</div>
			<div className="appContainer-aside">
				<Navbar state={props.store.getState().navbar}/>
			</div>
		</div>
	);
}


/*const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.store.getState().navbar}/>
				<div className="app-wrapper-content">
					<Route path='/dialogs'
						   render={() => <DialogsContainer store={props.store} />} />

					<Route path='/profile'
						   render={() => <Profile store={props.store} />} />

					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
}*/

export default App;