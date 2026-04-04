"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("/#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#why-choose-us" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Blog", href: "/#blog" },
    { name: "Resources", href: "/#tools" },
  ];

  return (
    <nav className="bg-white shadow-[0px_4px_62px_0px_rgba(250,196,210,0.63)] z-50 sticky top-0">
      <div className="max-w-360 mx-auto flex items-center justify-between xl:px-25 px-6 py-4 w-full">
        <div className="shrink-0">
          <Link href="/#home" onClick={() => scrollToSection("home")}>
            <Image
              src="/logo/google-logo.png"
              alt="Logo"
              width={124}
              height={45}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center gap-6">
          {navLinks.map((item) => {
            const currentPath = pathname || "/";
            const isActive = currentPath === item.href;

            return (
              <li
                key={item.name}
                className={`relative text-[18px] transition-colors hover:text-[#ED3C6A] py-1 cursor-pointer ${
                  isActive
                    ? "text-[#ED3C6A] font-bold"
                    : "text-[#1E1E1E] font-normal"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ED3C6A] rounded-full"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            size="md"
            icon
            onClick={() => scrollToSection("why-choose-us")}
          >
            Schedule A Meeting
          </Button>
        </div>

        {/* Mobile Hamburger Burger */}
        <button
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-7.5 h-7.5"
          onClick={() => setIsOpen(true)}
        >
          <span className="block w-full h-0.75 bg-[#1E1E1E] rounded-md"></span>
          <span className="block w-full h-0.75 bg-[#1E1E1E] rounded-md"></span>
          <span className="block w-full h-0.75 bg-[#1E1E1E] rounded-md"></span>
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full max-w-sm w-75 bg-white shadow-2xl flex flex-col gap-8 p-8 pt-20 z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-8 p-2 lg:hidden flex items-center justify-center bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <ul className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <li
              key={item.name}
              className="navbar-item font-medium text-[18px] text-[#1E1E1E] border-b border-gray-100 pb-3 cursor-pointer"
              onClick={() => scrollToSection(item.href)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="w-full flex mt-auto pb-8 justify-center ">
          <Button
            size="md"
            icon
            onClick={() => scrollToSection("why-choose-us")}
          >
            Schedule A Meeting
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
