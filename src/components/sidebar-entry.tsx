import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sidebar-entry.scss';

type SidebarEntryProps = {
	icon: IconProp;
	label: string;
	isOpen?: boolean;
};

const SidebarEntry = (props: SidebarEntryProps) => {
	let labelClass;
	switch (props.isOpen) {
		case true: {
			labelClass = 'unhide-label';
			break;
		}
		default: {
			labelClass = 'hide-label';
			break;
		}
	}
	return (
		<div>
			<div className={'sidebar-entry ' + labelClass}>
				<FontAwesomeIcon icon={props.icon} />
				<div className="sidebar-entry-label">{props.label}</div>
			</div>
		</div>
	);
};

export default SidebarEntry;
