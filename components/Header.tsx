import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="md:flex-1 flex items-center gap-1">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
        />
        <h1 className="hidden md:block font-[700]">WHB Live</h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
