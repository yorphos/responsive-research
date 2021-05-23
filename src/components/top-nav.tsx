import Hamburger from './hamburger';
import './top-nav.scss';

type TopNavProps = {
  toggleSidebar: () => void;
};

function TopNav(props: TopNavProps) {
  return (
    <div className='top-nav'>
      <Hamburger toggleSidebar={props.toggleSidebar} />
      <div className='header'>b</div>
      <div className='login-controls'>c</div>
    </div>
  );
}

export default TopNav;
