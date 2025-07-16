import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="destructive" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
