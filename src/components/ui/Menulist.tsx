import { Command, CommandGroup, CommandItem, CommandList } from "./command";

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
interface MenuItem {
  text: string;
}

interface MenuGroup {
  icon: React.ReactNode;
  group: string;
  items: MenuItem[];
}

interface MenuComponentProps {
  menuList: MenuGroup[];
}

const MenuComponent: React.FC<MenuComponentProps> = ({ menuList }) => (
  <div className="h-full overflow-auto">
    <Command>
      <CommandList>
        {menuList.map((menu, key) => (
          <CommandGroup key={key} className="text-[18px]">
            <CommandGroupHeading icon={menu.icon} text={menu.group} />
            {menu.items.map((option, optionKey) => (
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

export default MenuComponent;
