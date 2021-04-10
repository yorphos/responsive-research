import React, { Component } from 'react';
import MiniLogin from './mini-login';

import './topnav.css';

class TopNav extends Component {
	render() {
		return (
			<nav className='top-nav'>
				<div className='hamburger' />
				<h1 className='top-nav-title'>
					Test
				</h1>
				<MiniLogin />
			</nav>
		);
	}
}

export default TopNav;
