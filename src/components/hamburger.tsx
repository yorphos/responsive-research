import './hamburger.scss';

type HamburgerProps = {
  toggleSidebar: () => void;
};

function Hamburger(props: HamburgerProps) {
  return (
    <div className='hamburger' onClick={props.toggleSidebar}>
      hamby
    </div>
  );
}

export default Hamburger;
