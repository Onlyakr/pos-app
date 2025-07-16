import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full">
      <ShoppingBag size={150} />
      <Link href="/sales/cart">
        <Button size="xl" variant="destructive" className="w-42">
          Make a sale
        </Button>
      </Link>
    </div>
  );
};
export default Page;
