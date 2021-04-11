import React, { Component } from 'react';

import './siderbar.scss';

type SideBarProps = {
	isOpen: boolean;
};

class SideBar extends Component<SideBarProps, {}> {
	render() {
		switch(this.props.isOpen) {
			case true:
				return <div className='sidebar-mini'>te</div>
			case false:
				return <div className='sidebar-extended'>test!</div>
		}
	}
}

export default SideBar;
