import { IoMenu, IoClose } from "react-icons/io5";
import { dynamicLinks } from "@/utils/defaultLinks";
import { useState } from "react";

import MobileMenu from "../elements/MobileMenu";
import NavLinks from "../elements/NavLinks";
import Logo from "../elements/Logo";

const Header = () => {
  // ============= States ================
  const [isOpen, setIsOpen] = useState(false);

  // ============= Rendering ================
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center py-4 px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <NavLinks extraLinks={dynamicLinks} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <MobileMenu
          closeMenu={() => setIsOpen(false)}
          extraLinks={dynamicLinks}
        />
      )}
    </header>
  );
};

export default Header;
