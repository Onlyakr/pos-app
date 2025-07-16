import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "@/lib/usersdata";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

const Account = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 px-2 cursor-pointer focus-visible:ring-0"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" sideOffset={10}>
        <DropdownMenuItem>
          <Button
            variant="ghost"
            className="w-full flex items-center gap-2 cursor-pointer hover:bg-transparent"
          >
            <LogOut className="w-4 h-4 mr-2 hover:text-background" />
            <span>Logout</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Account;
