import { Page } from './root';
import SidebarEntry from './sidebar-entry';
import './sidebar.scss';

type SidebarProps = {
  setPage: (page: number) => void;
};

function Sidebar(props: SidebarProps) {
  return (
    <div className='sidebar'>
      <SidebarEntry text='test1' page={Page.A} setPage={props.setPage} />
      <SidebarEntry text='test2' page={Page.B} setPage={props.setPage} />
      <SidebarEntry text='test3' page={Page.C} setPage={props.setPage} />
    </div>
  );
}

export default Sidebar;
