import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';

import './siderbar.scss';

type SideBarProps = {
	isOpen: boolean;
};

const SideBar = (props: SideBarProps) => {
	switch (props.isOpen) {
		case false:
			return (
				<div className="sidebar-mini">
					<div className="mini-icon-stack">
						<FontAwesomeIcon icon={faHome} />
						<FontAwesomeIcon icon={faNewspaper} />
					</div>
				</div>
			);
		case true:
			return <div className="sidebar-extended">test!</div>;
	}
};

export default SideBar;
