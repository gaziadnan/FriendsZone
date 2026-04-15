"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Home, Clock, BarChart} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {name: "Home", path: "/", icon: Home},
    {name: "Timeline", path: "/timeline", icon: Clock},
    {name: "Stats", path: "/stats", icon: BarChart},
  ];

  return (
    <div className="w-full bg-white flex justify-center">
      {/* Fixed Width Container */}
      <div className="w-full max-w-[1600px] px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="KeenKeeper Logo"
            width={141}
            height={31}
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}>
                <Icon size={16} />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
