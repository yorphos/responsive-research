import { faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import './siderbar.scss';
import SidebarEntry from './sidebar-entry';

type SideBarProps = {
	isOpen: boolean;
};

const SideBar = (props: SideBarProps) => {
	let sidebarClass;
	switch (props.isOpen) {
		case true: {
			sidebarClass = 'sidebar-extended';
			break;
		}
		case false: {
			sidebarClass = 'sidebar-mini';
			break;
		}
	}

	return (
		<div className={sidebarClass}>
			<div className="mini-icon-stack">
				<SidebarEntry
					icon={faHome}
					label="Home"
					isOpen={props.isOpen}
				/>
				<SidebarEntry
					icon={faNewspaper}
					label="News"
					isOpen={props.isOpen}
				/>
			</div>
		</div>
	);
};

export default SideBar;
