import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 text-blue-600 font-bold text-xl"
    >
      <FaComments className="text-2xl" />
      ChatApp
    </Link>
  );
};

export default Logo;
