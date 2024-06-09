import { Clipboard, Factory, ScrollText, ShoppingCart } from "lucide-react";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
const Menulist = () => {
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
  interface CommandGroupHeadingProps {
    icon: React.ReactNode;
    text: string;
  }
  const CommandGroupHeading = ({ icon, text }: CommandGroupHeadingProps) => (
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
  return (
    <div className="h-full overflow-auto">
      <Command>
        <CommandList>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} className="text-[18px]">
              <CommandGroupHeading icon={menu.icon} text={menu.group} />
              {menu.items.map((option: any, optionKey: number) => (
                <CommandItem
                  key={optionKey}
                  className="ml-6 cursor-pointer text-[16px]"
                >
                  {option.text}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </div>
  );
};

export default Menulist;
