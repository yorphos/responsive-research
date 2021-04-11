import "./siderbar.scss";

type SideBarProps = {
  isOpen: boolean;
};

const SideBar = (props: SideBarProps) => {
  switch (props.isOpen) {
    case false:
      return <div className="sidebar-mini">te</div>;
    case true:
      return <div className="sidebar-extended">test!</div>;
  }
};

export default SideBar;
