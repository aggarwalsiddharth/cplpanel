import MenuComponent from "./Menulist";
import Useritem from "./Useritem";
import { Clipboard, Factory, ScrollText, ShoppingCart } from "lucide-react";

const menuList = [
  {
    group: "Purchase",
    icon: <Factory />,
    items: [
      {
        link: "/",
        text: "Raw Material",
        icon: <Factory />,
      },
      {
        link: "/",
        text: "Plain Board",
        icon: <Clipboard />,
      },
      {
        link: "/",
        text: "Paper",
        icon: <ScrollText />,
      },
    ],
  },
  {
    group: "Sale",
    icon: <Clipboard />,
    items: [
      {
        link: "/",
        text: "Plain Board2",
        icon: <Factory />,
      },
      {
        link: "/",
        text: "Plain Board3",
        icon: <Clipboard />,
      },
      {
        link: "/",
        text: "Paper1",
        icon: <ScrollText />,
      },
    ],
  },

  {
    group: "Settings",
    icon: <ScrollText />,
    items: [
      {
        link: "/",
        text: "Raw Material11",
        icon: <Factory />,
      },
      {
        link: "/",
        text: "Plain Board12",
        icon: <Clipboard />,
      },
      {
        link: "/",
        text: "Paper12",
        icon: <ScrollText />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col border-r p-1">
      <div>
        <Useritem />
      </div>
      <div className="flex-grow overflow-hidden">
        <MenuComponent menuList={menuList} />
      </div>
      <div>Notifications</div>
    </div>
  );
};

export default Sidebar;
