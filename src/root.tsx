import React, { Component } from 'react';
import TopNav from './topnav';
import SideBar from './sidebar';

import './root.css';

class Root extends Component {
	render() {
		return (
			<div className='root'>
				<TopNav />
				<div className='middle'>
					<SideBar />
					<div className='main-content'/>
				</div>
			</div>
		);
	}
}

export default Root;
