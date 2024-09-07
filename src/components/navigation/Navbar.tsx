import { User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-6 w-full flex justify-between shadow-lg">
      <Link href="/" className="font-bold text-lg">
        AMALYFE
      </Link>
      <div className="flex gap-4 text-sm items-center">
        <Link href="/" className="hover:underline">
          Beranda
        </Link>
        <Link href="/layanan" className="hover:underline">
          Layanan
        </Link>
        <Link href="/about" className="hover:underline">
          Tentang Kami
        </Link>
        <User size={22} className="rounded-full border border-gray-500 me-4" />
      </div>
    </nav>
  );
};

export default Navbar;
