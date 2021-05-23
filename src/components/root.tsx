import TopNav from './top-nav';
import Sidebar from './sidebar';
import { useState } from 'react';
import MainContent from './main-content';
import SideContent from './side-content';

import './root.scss';

export const Page = {
  A: 0,
  B: 1,
  C: 2,
};

type RootProps = {};

function Root(props: RootProps) {
  const [sidebarState, setSidebarState] = useState(false);
  const [contentClasses, setContentClasses] = useState('content');
  const [currPage, setCurrPage] = useState(0);

  const toggleSidebar = () => {
    switch (sidebarState) {
      case true: {
        setContentClasses('content open-sidebar');
        break;
      }
      case false: {
        setContentClasses('content');
        break;
      }
    }

    setSidebarState(!sidebarState);
  };

  const setPage = (page: number) => {
    setCurrPage(page);
  };

  return (
    <div className='root'>
      <TopNav toggleSidebar={toggleSidebar} />
      <div className={contentClasses}>
        <Sidebar setPage={setPage} />
        <MainContent page={currPage} />
        <SideContent />
      </div>
    </div>
  );
}

export default Root;
