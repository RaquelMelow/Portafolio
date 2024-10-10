import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-300 mb-20 flex items-center justify-between py-6 px-16"> 
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-4 text-2xl text-gray-900 hover:text-gray-700">
          <FaLinkedin/>
          <FaGithub/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
