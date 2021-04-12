import React, { useState } from 'react';
import TopNav from './topnav';
import SideBar from './sidebar';
import MainContent from './main-content';
import { HamburgerGrouping } from './hamburger';

import '../components/root.scss';

type RootProps = {};

const Root = (props: RootProps) => {
	const [isHamburgerOpen, setHamburgerOpen] = useState(false);

	const _doHamburger = (e: React.MouseEvent) => {
		e.stopPropagation();
		setHamburgerOpen(!isHamburgerOpen);
	};

	let hamburgerGrouping: HamburgerGrouping = {
		isOpen: isHamburgerOpen,
		onClick: _doHamburger,
	};

	return (
		<div className="root">
			<TopNav hamburgerGrouping={hamburgerGrouping} />
			<div className="middle">
				<SideBar isOpen={hamburgerGrouping.isOpen} />
				<MainContent />
			</div>
		</div>
	);
};

export default Root;
