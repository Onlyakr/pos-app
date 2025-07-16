// import Image from "next/image";
import Link from "next/link";
// import logo from "@/public/logo.png";
import { Button } from "./ui/button";

const Logo = ({ size = 20 }: { size?: number }) => {
  return (
    <div className={`relative size-${size} mx-auto`}>
      <Link href="/">
        {/* <Image src={logo} alt="Logo" fill className="object-contain" /> */}
        <Button variant="destructive" className="size-20">
          รูปไม่พร้อมใช้งาน
        </Button>
      </Link>
    </div>
  );
};
export default Logo;
