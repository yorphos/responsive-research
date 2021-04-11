import React, { Component } from 'react';

import './siderbar.scss';

type SideBarProps = {
	isOpen: boolean;
}

class SideBar extends Component<SideBarProps, {}> {
	render() {
		return (
			<div className={'sidebar ' + (this.props.isOpen ? '' : 'closed')}>
				test
			</div>
		);
	}
}

export default SideBar;
