import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const Useritem = () => {
  return (
    <div className="items- flex gap-2 rounded-[16px] border p-2">
      <Avatar className="min-h-14 min-w-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-[18px] font-bold">Siddharth Aggarwal</p>
        <p className="text-[14px] text-neutral-400">Managing Director</p>
      </div>
    </div>
  );
};

export default Useritem;
