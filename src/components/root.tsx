import React, { Component } from 'react';
import TopNav from './topnav';
import SideBar from './sidebar';
import MainContent from './main-content';
import { HamburgerGrouping } from './hamburger';

import '../components/root.scss';

type RootProps = {};

type RootState = {
	hamburgerGrouping: HamburgerGrouping,
};

class Root extends Component<RootProps, RootState> {
	constructor(props: RootProps) {
		super(props);
		this.state = {
			hamburgerGrouping: {
				isOpen: false,
				onClick: this._doHamburger,
			}
		}
	}

	_doHamburger = () => {
		this.setState({hamburgerGrouping: {
			isOpen: !this.state.hamburgerGrouping.isOpen,
			onClick: this.state.hamburgerGrouping.onClick,
		}});
	};

	render() {
		return (
			<div className='root'>
				<TopNav hamburgerGrouping={this.state.hamburgerGrouping} />
				<div className={'middle ' + (this.state.hamburgerGrouping.isOpen ? 'open' : 'closed')}>
					<SideBar isOpen={this.state.hamburgerGrouping.isOpen} />
					<MainContent />
				</div>
			</div>
		);
	}
}

export default Root;
