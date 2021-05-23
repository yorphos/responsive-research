import PageA from './page-a';
import PageB from './page-b';
import PageC from './page-c';

import './main-content.scss';

type MainContentProps = {
  page: number;
};

function MainContent(props: MainContentProps) {
  const getPage = (page: number) => {
    switch (page) {
      case 0: {
        return <PageA />;
      }
      case 1: {
        return <PageB />;
      }
      case 2: {
        return <PageC />;
      }
    }
  };

  return <div className='main-content'>{getPage(props.page)}</div>;
}

export default MainContent;
