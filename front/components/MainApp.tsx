import { User } from "@/lib/usersdata";
import { SidebarTrigger } from "./ui/sidebar";
import Headers from "./Header";

const MainApp = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col min-h-screen w-full p-2">
      <div className="sticky top-0 bg-muted/70 h-16 flex justify-between items-center gap-5 z-50 p-2 backdrop-blur-xl">
        <SidebarTrigger />
        <Headers user={user} />
      </div>
      <main className="w-full h-full bg-background rounded-2xl p-2">
        {children}
      </main>
    </div>
  );
};
export default MainApp;
