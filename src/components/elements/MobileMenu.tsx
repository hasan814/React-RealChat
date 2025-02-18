import { MobileMenuProps } from "@/types/elements";
import NavLinks from "./NavLinks";

const MobileMenu: React.FC<MobileMenuProps> = ({
  closeMenu,
  extraLinks = [],
}) => {
  return (
    <nav className="md:hidden bg-white border-t shadow-md">
      <ul className="flex flex-col text-center py-3 space-y-3">
        <NavLinks extraLinks={extraLinks} onClick={closeMenu} />
      </ul>
    </nav>
  );
};

export default MobileMenu;
