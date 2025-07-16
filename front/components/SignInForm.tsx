import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export function SignInForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Logo /> */}
      <Link href="/">
        <Image src={logo} alt="logo" width={125} height={125} />
      </Link>
      <h1 className="text-2xl font-medium mb-2">Moonlight Books</h1>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
