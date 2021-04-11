import React, { Component } from 'react';

import './hamburger.scss';

type HamburgerProps = {
	hamburgerGrouping: HamburgerGrouping,
};

export interface HamburgerGrouping {
	isOpen: boolean,
	onClick: (e: React.MouseEvent) => void,
}

class Hamburger extends Component<HamburgerProps, {}> {
    constructor(props: HamburgerProps) {
        super(props);
        this.state = {
            hamburgerGrouping: props.hamburgerGrouping,
        }
    }

	render() {
		return <div className='hamburger' onClick={this.props.hamburgerGrouping.onClick} />;
	}
}

export default Hamburger;
