import './main-content.scss';

type MainContentProps = {};

const MainContent = (props: MainContentProps) => {
	return (
		<div className="main-content">
			<article className="main-article" />
			<article className="side-article" />
		</div>
	);
};

export default MainContent;
