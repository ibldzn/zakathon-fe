import { Bell, User } from "lucide-react";
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
        <Bell size={22} className="rounded-full" />
        <div className="rounded-full shadow-xl p-2 flex gap-2 justify-center items-center">
          <User size={22} />
          <span className="text-xs">Profil</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
