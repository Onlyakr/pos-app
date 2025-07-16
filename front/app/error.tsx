"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <h1>Found an error</h1>
      <p>{error.message}</p>
      <Button variant="destructive" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
};
export default Error;
