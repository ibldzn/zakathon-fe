import { User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-8 w-full flex justify-between shadow-lg">
      <Link href="/" className="font-bold text-lg">
        Ztion
      </Link>
      <div className="flex gap-4 text-sm items-center">
        <Link href="/beranda" className="hover:underline">
          Beranda
        </Link>
        <Link href="/cara-berzakat" className="hover:underline">
          Cara Berzakat
        </Link>
        <Link href="/about" className="hover:underline">
          Tentang Kami
        </Link>
        <User size={22} className="rounded-full border border-gray-500" />
      </div>
    </nav>
  );
};

export default Navbar;
