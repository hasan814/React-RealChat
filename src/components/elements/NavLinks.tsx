import { Link, useLocation } from "react-router-dom";
import { NavLinksProps } from "@/types/elements";
import { defaultLinks } from "@/utils/defaultLinks";

const NavLinks: React.FC<NavLinksProps> = ({ extraLinks = [], onClick }) => {
  // ============= Location ===================
  const location = useLocation();

  const allLinks = [
    ...defaultLinks,
    ...extraLinks.filter(
      (link) =>
        !defaultLinks.some((defaultLink) => defaultLink.path === link.path)
    ),
  ];

  // ============= Rendering ===================
  return (
    <>
      {allLinks.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`px-3 py-2 rounded-md transition duration-300 ${
            location.pathname === path
              ? "bg-blue-600 text-white"
              : "hover:text-blue-600"
          }`}
          onClick={onClick}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
