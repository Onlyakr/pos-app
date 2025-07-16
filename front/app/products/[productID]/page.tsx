"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <Button
        variant="outline"
        className="size-6 sticky top-20 left-3 z-50 mb-2"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
      <div className="bg-muted rounded-xl grow h-[1000px]"></div>
    </div>
  );
};
export default Page;
