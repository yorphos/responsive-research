import React from 'react';

import './hamburger.scss';

type HamburgerProps = {
	hamburgerGrouping: HamburgerGrouping;
};

export interface HamburgerGrouping {
	isOpen: boolean;
	onClick: (e: React.MouseEvent) => void;
}

const Hamburger = (props: HamburgerProps) => {
	return (
		<div
			className={
				'hamburger-' +
				(props.hamburgerGrouping.isOpen ? 'open ' : 'closed ')
			}
			onClick={props.hamburgerGrouping.onClick}
		/>
	);
};

export default Hamburger;
