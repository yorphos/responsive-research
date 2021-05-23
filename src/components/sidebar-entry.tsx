import './sidebar-entry.scss';

type SidebarEntryProps = {
  text: string;
  page: number;
  setPage: (page: number) => void;
};

function SidebarEntry(props: SidebarEntryProps) {
  return (
    <div className='sidebar-entry' onClick={() => props.setPage(props.page)}>
      {props.text}
    </div>
  );
}

export default SidebarEntry;
