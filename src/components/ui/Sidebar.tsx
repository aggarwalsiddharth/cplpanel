import Menulist from "./Menulist";
import Useritem from "./Useritem";

const Sidebar = () => {
  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col border-r p-1">
      <div>
        <Useritem />
      </div>
      <div className="flex-grow overflow-hidden">
        <Menulist />
      </div>
      <div>Notifications</div>
    </div>
  );
};

export default Sidebar;
