import { SignInForm } from "@/components/SignInForm";
import Logo from "@/components/Logo";

const Page = () => {
  return (
    <div className="flex flex-col flex-gap-5 items-center justify-center h-screen">
      <Logo />
      <h1 className="text-2xl font-medium">Moonlight Books</h1>
      <SignInForm />
    </div>
  );
};
export default Page;
