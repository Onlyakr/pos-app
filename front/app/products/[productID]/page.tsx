"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { open } = useSidebar();
  const router = useRouter();
  return (
    <div className="relative w-full h-full">
      <Button
        className="size-6 absolute top-3 left-3 z-50 mb-2 bg-background text-foreground"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
      <div className="bg-muted rounded-2xl grow h-full p-15 flex justify-center items-center">
        <div
          className={cn(
            "flex bg-gray-400 rounded-md size-full",
            open && "flex-col"
          )}
        >
          <div className="bg-red-400 size-full "></div>
          <div className="bg-green-400 size-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Page;
