import React, { Component } from 'react';

import './hamburger.scss';

type HamburgerProps = {
	hamburgerGrouping: HamburgerGrouping,
};

export type HamburgerGrouping = {
	isOpen: boolean,
	onClick: (event: React.MouseEvent) => void,
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
